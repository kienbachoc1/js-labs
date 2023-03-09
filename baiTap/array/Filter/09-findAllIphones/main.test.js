import { findAllIphones } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    const productList = [
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ];
    expect(findAllIphones(productList)).toEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});
