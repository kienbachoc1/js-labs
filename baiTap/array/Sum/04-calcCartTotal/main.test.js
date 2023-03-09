import { calcCartTotal } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ];
    expect(calcCartTotal(cartItemList)).toBe(250000); // 250000 = 50 x 1 + 100000 x 2
  });
});
