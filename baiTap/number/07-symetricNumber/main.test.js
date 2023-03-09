import { isSymmetricNumber, isSymmetricNumberV2 } from './main';

describe('isSymmetricNumber(n)', () => {
  test('should return false when n != [1-1000000]', () => {
    expect(isSymmetricNumber(0)).toBe(false);
    expect(isSymmetricNumber(-1)).toBe(false);
    expect(isSymmetricNumber(1100000)).toBe(false);
  });

  test('should return false when n is symmetric number', () => {
    expect(isSymmetricNumber(2)).toBe(true);
    expect(isSymmetricNumber(10)).toBe(false);
    expect(isSymmetricNumber(11)).toBe(true);
    expect(isSymmetricNumber(12321)).toBe(true);
  });
});

describe('isSymmetricNumberV2(n)', () => {
  test('should return false when n != [1-1000000]', () => {
    expect(isSymmetricNumberV2(0)).toBe(false);
    expect(isSymmetricNumberV2(-1)).toBe(false);
    expect(isSymmetricNumberV2(1100000)).toBe(false);
  });

  test('should return false when n is symmetric number', () => {
    expect(isSymmetricNumberV2(2)).toBe(true);
    expect(isSymmetricNumberV2(10)).toBe(false);
    expect(isSymmetricNumberV2(11)).toBe(true);
    expect(isSymmetricNumberV2(12321)).toBe(true);
  });
});
