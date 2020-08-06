import formatGenericAssetBalance from './util';

describe('formatGenericAssetBalance', () => {
  it('should return .0000', () => {
    const balanceStub = '1';
    const result = formatGenericAssetBalance(balanceStub);
    expect(result).toEqual('1.0000');
  });
});
