import { findProductHavingFreeShip } from './main';

describe('findProductHavingFreeShip(productList)', () => {
  test('should ', () => {
    const productList = [
      { id: 1, name: 'IPhone 5', isFreeShip: false },
      { id: 2, name: 'IPhone X', isFreeShip: true },
      { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
    ];
    expect(findProductHavingFreeShip(productList)).toEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });
});
