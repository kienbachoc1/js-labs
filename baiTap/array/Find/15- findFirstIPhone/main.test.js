import { findFirstIPhone } from './main';

describe('findFirstIPhone(productList)', () => {
  test('should ', () => {
    const productList = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'IPHONE X' },
      { id: 3, name: 'iPhone 12 Pro' },
    ];
    expect(findFirstIPhone(productList)).toEqual({ id: 2, name: 'IPHONE X' });
  });
});
