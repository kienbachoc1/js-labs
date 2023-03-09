import { findAllProducts } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    const productList = [
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
      { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
    ];
    expect(findAllProducts(productList)).toEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });
});
