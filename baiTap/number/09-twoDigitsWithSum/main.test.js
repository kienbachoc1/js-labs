import { hasTwoDigitsWithSum } from './main';

describe('hasTwoDigitsWithSum(n, sum)', () => {
  test('should return false when n != [9-1000000] or sum != [0-19]', () => {
    expect(hasTwoDigitsWithSum(2, 1)).toBe(false);
    expect(hasTwoDigitsWithSum(1100000, 1)).toBe(false);
    expect(hasTwoDigitsWithSum(11, -1)).toBe(false);
    expect(hasTwoDigitsWithSum(11, 20)).toBe(false);
  });

  test('should return false when n has two digits with sum', () => {
    expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
  });
});
