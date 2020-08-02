import { formatBalance } from '@polkadot/util';

const formatGenericAssetBalance = (value: any): string => {
  // TODO: fetch the value from chain
  // const BASE_POWER = 4;
  const [prefix, postfix] = formatBalance(value, {
    forceUnit: '-',
    withSi: false
  }).split('.');

  const formatedBalance = `${prefix}.0000${postfix || ''}`.slice(-4);

  console.log('util prefix', prefix);
  console.log('util result', formatedBalance);

  return formatedBalance;
};

export default formatGenericAssetBalance;
