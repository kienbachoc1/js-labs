import { findProductByCode } from './main';

describe('findProductByCode(productList, code)', () => {
  test('should ', () => {
    const productList = [
      { id: 1, code: 'ip01', name: 'IPhone 16' },
      { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
    ];
    expect(findProductByCode(productList, 'ip01')).toBe(0);
    expect(findProductByCode(productList, 'ip03')).toBe(-1);
  });
});
