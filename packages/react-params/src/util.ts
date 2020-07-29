import { formatBalance } from '@polkadot/util';

const formatGenericAssetBalance = (value: any): string => {
  // TODO: fetch the value from chain
  const BASE_POWER = 4;
  const [prefix, postfix] = formatBalance(value, {
    forceUnit: '-',
    withSi: false
  }).split('.');

  return `${prefix}.0000${postfix || ''}`.slice(0 - BASE_POWER);
};

export default formatGenericAssetBalance;
