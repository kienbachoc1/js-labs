import { hasTruthy } from './main';

describe('hasTruthy(arr)', () => {
  test('should return false when all item of array is falsy', () => {
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy([false, '', null, undefined, 0, NaN])).toBe(false);
  });

  test('should return true when one item of array is truthy', () => {
    expect(hasTruthy([false, 'abc', 123, undefined, 0, NaN])).toBe(true);
  });
});
