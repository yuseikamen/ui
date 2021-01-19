import BN from 'bn.js';
import { Nominations, StakingLedger, Exposure } from '@cennznet/types';
import { ApiPromise } from '@polkadot/api';
import { BalanceOf } from '@polkadot/types/interfaces';

import { Nominate, Stake } from './index';

export async function getStakes(
  api: ApiPromise,
  addresses: string[]
): Promise<Stake[]> {
  const stakeAccountPairMap: Record<
    string,
    {
      stashAccountAddress: string;
      controllerAccountAddress: string;
    }
  > = {}; // Key is `stashAccountAddress-controllerAccountAddress`, use map for deduplicate
  await Promise.all(
    addresses.map(
      address =>
        new Promise<void>(async resolve => {
          const controllerAddress = await getControllerByStash(address, api);
          if (controllerAddress !== null) {
            stakeAccountPairMap[`${address}-${controllerAddress}`] = {
              stashAccountAddress: address,
              controllerAccountAddress: controllerAddress
            };
          }

          const stashAddress = await getStashByController(address, api);
          if (stashAddress !== null) {
            stakeAccountPairMap[`${stashAddress}-${address}`] = {
              stashAccountAddress: stashAddress,
              controllerAccountAddress: address
            };
          }
          resolve();
        })
    )
  );

  const stakes = await Promise.all(
    Object.values(stakeAccountPairMap).map(
      accountPair =>
        new Promise<Stake>(async resolve => {
          const stake = await getStake(
            accountPair.stashAccountAddress,
            accountPair.controllerAccountAddress,
            api
          );
          resolve(stake);
        })
    )
  );

  return stakes;
}

/**
 * Return null if there is no stake with this stash account address
 * @param address
 */
export async function getControllerByStash(
  address: string,
  api: ApiPromise
): Promise<string | null> {
  const controllerAccountAddressOption = await api.query.staking.bonded(
    address
  );

  if (controllerAccountAddressOption.isNone) {
    return null;
  }

  return controllerAccountAddressOption.toString();
}

/**
 * Return null if there is no stake with this controller account address
 */
export async function getStashByController(
  address: string,
  api: ApiPromise
): Promise<string | null> {
  const ledgerOption = await api.query.staking.ledger(address);

  if (ledgerOption.isNone) {
    return null;
  }

  return ledgerOption.unwrapOrDefault().stash.toString();
}

export async function getStake(
  stashAccountAddress: string,
  controllerAccountAddress: string,
  api: ApiPromise
): Promise<Stake> {
  // Get stakeAmount and rewardDestinationsAddresses
  const stakeLedger = (
    await api.query.staking.ledger(controllerAccountAddress)
  ).unwrapOrDefault() as StakingLedger;
  const stakeAmount = new BN(stakeLedger.total.toString());

  const rewardDestination = await api.query.staking.payee(stashAccountAddress);
  let rewardDestinationsAddress: string;
  if (rewardDestination.isStash) {
    rewardDestinationsAddress = stashAccountAddress;
  } else if (rewardDestination.isController) {
    rewardDestinationsAddress = controllerAccountAddress;
  } else if (rewardDestination.isAccount) {
    rewardDestinationsAddress = rewardDestination.asAccount.toString();
  } else {
    throw new Error(`reward destinations is not stash, controller or account`);
  }

  // Get nominatorsAddresses
  const nominates = await getNominates(stashAccountAddress, api);

  return {
    stashAccountAddress,
    controllerAccountAddress,
    stakeAmount,
    rewardDestinationsAddress,
    nominates
  };
}

export async function getNominates(
  stashAccountAddress: string,
  api: ApiPromise
): Promise<Nominate[]> {
  const nominates: Nominate[] = [];
  // Get nominatorsAddresses
  const nominationsOption = await api.query.staking.nominators(
    stashAccountAddress
  );
  if (nominationsOption.isNone) {
    return [];
  }
  const nominations = nominationsOption.unwrapOrDefault() as Nominations;
  const nominateToAddresses =
    nominations && nominations.targets
      ? (nominations.targets.toJSON() as string[])
      : [];

  // For each nominator, get stakeShare, commission and nextRewardEstimate
  await Promise.all(
    nominateToAddresses.map(
      async nominateToAddress =>
        new Promise<void>(async resolve => {
          // Get commission
          const commission = (
            await api.query.staking.validators(nominateToAddress)
          ).commission.toString();

          // Get stakeShare
          const { stakeShare, elected } = await getStakeShare(
            nominateToAddress,
            stashAccountAddress,
            api
          );

          // Get reward estimate
          const nextRewardEstimate = await getNextRewardEstimate(
            api,
            new BN(commission),
            stakeShare
          );

          nominates.push({
            nominateToAddress,
            stakeShare,
            commission: new BN(commission),
            elected,
            nextRewardEstimate
          });

          resolve();
        })
    )
  );
  return nominates;
}

// Reference: https://github.com/cennznet/cennznet/wiki/Validator-Guide#rewards
const PERBILL_DIVIDED_NUMBER = new BN(10).pow(new BN(18));
export async function getNextRewardEstimate(
  api: ApiPromise,
  commission: BN,
  stakeShare: BN
): Promise<BN> {
  const inflationBalanceOf = (await api.query.rewards.inflationRate()) as BalanceOf;
  const inflation = new BN(inflationBalanceOf).div(PERBILL_DIVIDED_NUMBER);
  const totalTransactionFeesBalanceOf = await api.query.rewards.transactionFeePot();
  const totalTransactionFees = new BN(totalTransactionFeesBalanceOf.toString());
  const totalPayout = totalTransactionFees.mul(inflation);

  const validators = await api.query.session.validators();
  const validatorCount = new BN(validators.length);
  const developmentFundTake = new BN((await api.query.rewards.developmentFundTake()).toString());
  const perValidatorPayout = totalPayout
    .mul(new BN(1).sub(developmentFundTake))
    .div(validatorCount);

  const nominatorPayout = perValidatorPayout
    .mul(new BN(1).sub(commission))
    .mul(stakeShare);

  return nominatorPayout;
}

export async function getStakeShare(
  nominateToAddress: string,
  stashAccountAddress: string,
  api: ApiPromise
): Promise<{ stakeShare: BN; elected: boolean }> {
  const stakers = (await api.query.staking.stakers(
    nominateToAddress
  )) as Exposure;
  const totalStakeAmount = new BN(stakers.total.toString());
  const stakersWithStashAccount = stakers.others.find(
    other => other.who.toString() === stashAccountAddress
  );
  if (!stakersWithStashAccount) {
    return {
      stakeShare: new BN(0),
      elected: false
    };
  }
  const stashAccountStakeAmount = new BN(
    stakersWithStashAccount.value.toString()
  );

  return {
    stakeShare: stashAccountStakeAmount.div(totalStakeAmount),
    elected: true
  };
}
