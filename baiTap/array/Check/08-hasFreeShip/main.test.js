import { hasFreeShip } from './main';

describe('hasFreeShip(productList, price)', () => {
  test('should return false when productList is empty', () => {
    expect(hasFreeShip([])).toBe(false);
  });

  test('should return false when productList has not item is free ship', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: false, price: 1500000 },
        ],
        1000000
      )
    ).toBe(false);
  });

  test('should return false when productList has not item price < price', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: false, price: 15000000 },
        ],
        1000000
      )
    ).toBe(false);
  });

  test('should return true when productList has not item price < price', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
        ],
        10000000
      )
    ).toBe(true);
  });
});
