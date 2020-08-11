import { formatBalance } from '@polkadot/util';

describe('formatBalance', () => {
  test('should ', () => {
    const stubValue = '100000';
    const [prefixAfterSplitting, postfixAfterSplitting] = formatBalance(stubValue, {
      forceUnit: '-',
      withSi: false
    }).split('.');

    expect(prefixAfterSplitting).toEqual('');
    expect(postfixAfterSplitting).toEqual('');
  });
});
