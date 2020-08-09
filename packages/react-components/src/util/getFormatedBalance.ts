import { formatBalance, formatDecimal } from '@polkadot/util';

const formatGenericAssetBalance = (value: any, symbol: string): string => {
  const [prefixAfterSplitting, postfixAfterSplitting] = formatBalance(value, {
    forceUnit: '-',
    withSi: false
  }).split('.');

  console.log('prefixAfterSplitting', prefixAfterSplitting);
  console.log('postfixAfterSplitting', postfixAfterSplitting);

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



// Get formatted balance function takes the 'big number' value and break
// the values in prefix and postfix .. The postfix is then displayed as (default = 4) 4 decimal place value
// if postfix is 432 -> 0432
// export default function getFormattedBalance(value: any, supportsUnit?: boolean) {
//   if (value) {
//     const default_balance_param = formatBalance.getDefaults();
//     const DECIMAL_PLACES = default_balance_param.decimals;
//     const UNIT = default_balance_param.unit;
//     const text = value.toString();
//     const mid = text.length - DECIMAL_PLACES;
//     const prefix = formatDecimal(text.substr(0, mid) || '0');
//     const padding = mid < 0 ? 0 - mid : 0;
//     const zeros = '0';
//     const postfix = "".concat("".concat(new Array(padding + 1).join('0')).concat(text).substr(mid < 0 ? 0 : mid), zeros.repeat(DECIMAL_PLACES)).substr(0, DECIMAL_PLACES);
//     return supportsUnit ? `${prefix}.${postfix} ${UNIT}` : `${prefix}.${postfix}`;
//   } else {
//     return '';
//   }
// }
