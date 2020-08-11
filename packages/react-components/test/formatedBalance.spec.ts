import { formatBalance } from '@polkadot/util';

describe('formatBalance', () => {
  test('decimals=default', () => {
    const stubValue = '12345678987';
    const formatedBalance = formatBalance(stubValue, {
      decimals: 4,
      forceUnit: '-',
      withSi: false
    }).split('.');

    const [prefixAfterSplitting, postfixAfterSplitting] = formatedBalance;

    expect(prefixAfterSplitting).toEqual('1,234,567');
    expect(postfixAfterSplitting).toEqual('898');
  });
  test('decimals=4', () => {
    const stubValue = '12345678987';
    const formatedBalance = formatBalance(stubValue, {
      decimals: 4,
      forceUnit: '-',
      withSi: false
    }).split('.');

    const [prefixAfterSplitting, postfixAfterSplitting] = formatedBalance;

    expect(prefixAfterSplitting).toEqual('1,234,567');
    expect(postfixAfterSplitting).toEqual('898');
  });
});
