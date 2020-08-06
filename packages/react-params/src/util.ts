import { formatBalance } from '@polkadot/util';

const formatGenericAssetBalance = (variables: {value: any, symbol: string, power?: number}): string => {
  const { value, symbol, power = 4 } = variables;
  const [prefixAfterSplitting, postfixAfterSplitting] = formatBalance(value, {
    forceUnit: '-',
    withSi: false
  }).split('.');

  const integerPart = prefixAfterSplitting;

  /**
   * e.g postfixAfterSplitting = 123, expected result is 0123
   * It transformed into 0000321 (concat [0000 and 321(reversed 123)]),
   * then reverse 0000321 into 1230000, then get first 4 chars to get 1230
   */
  const decimalPart = postfixAfterSplitting
    ? '0000'.split('').concat(postfixAfterSplitting.split('').reverse()).reverse().join('').substring(4)
    : '0000';

  const formatedBalance = `${integerPart}.${decimalPart}} ${symbol}`;

  console.log('util integerPart', integerPart);
  console.log('util decimalPart', decimalPart);
  console.log('util result', formatedBalance);

  return formatedBalance;
};

export default formatGenericAssetBalance;
