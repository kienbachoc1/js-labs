import { isIncreasingNumber, isIncreasingNumberV2 } from './main';

describe('isIncreasingNumber()', () => {
  test('should return false when value is not a number', () => {
    expect(isIncreasingNumber('sfsdf')).toBe(false);
  });

  test('should return false when number < 0 or number > 1000000 ', () => {
    expect(isIncreasingNumber(-10)).toBe(false);
    expect(isIncreasingNumber(1000001)).toBe(false);
  });

  test('should return false when number only 1 unit', () => {
    expect(isIncreasingNumber(1)).toBe(false);
    expect(isIncreasingNumber(2)).toBe(false);
  });

  test('should return true when number ', () => {
    expect(isIncreasingNumber(11)).toBe(false);
    expect(isIncreasingNumber(123)).toBe(true);
    expect(isIncreasingNumber(12321)).toBe(false);
  });
});

describe('isIncreasingNumberV2()', () => {
  test('should return false when value is not a number', () => {
    expect(isIncreasingNumberV2('sfsdf')).toBe(false);
  });

  test('should return false when number < 0 or number > 1000000 ', () => {
    expect(isIncreasingNumberV2(-10)).toBe(false);
    expect(isIncreasingNumberV2(1000001)).toBe(false);
  });

  test('should return false when number only 1 unit', () => {
    expect(isIncreasingNumberV2(1)).toBe(false);
    expect(isIncreasingNumberV2(2)).toBe(false);
  });

  test('should return true when number ', () => {
    expect(isIncreasingNumberV2(11)).toBe(false);
    expect(isIncreasingNumberV2(123)).toBe(true);
    expect(isIncreasingNumberV2(12321)).toBe(false);
  });
});
