import { fillPath } from './main';

describe('fillPath(path, params)', () => {
  test('should return empty string when path or params empty', () => {
    expect(fillPath('', {})).toBe('');
  });

  test('should return new path', () => {
    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        categoryId: 1,
        productId: 2,
      })
    ).toBe('/categories/1/products/2');
    expect(fillPath('/products/:productId', { productId: 123 })).toBe('/products/123');
    expect(fillPath('/categories/:categoryId/products/:productId', { productId: 2 })).toBe(
      '/categories/:categoryId/products/2'
    );
  });
});
