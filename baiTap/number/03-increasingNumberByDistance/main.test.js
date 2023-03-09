import { isIncreasingNumberByDistance } from './main';

describe('isIncreasingNumberByDistance()', () => {
  test('should return false when param is not a number', () => {
    expect(isIncreasingNumberByDistance('sfsdf', 1)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 'dssfd')).toBe(false);
  });

  test('should return false when number != [0-1000000] or x != [0-5] ', () => {
    expect(isIncreasingNumberByDistance(-10, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(1000001, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(10, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(1000, -1)).toBe(false);
  });

  test('should return false when number only 1 unit', () => {
    expect(isIncreasingNumberByDistance(1, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(2, 1)).toBe(false);
  });

  test('should return true when number ', () => {
    expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(135, 1)).toBe(false);
  });
});
