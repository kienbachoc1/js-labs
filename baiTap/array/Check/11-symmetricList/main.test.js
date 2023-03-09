import { isSymmetricList } from './main';

describe('isSymmetricList(numberList)', () => {
  test('should return false when numberList is empty', () => {
    expect(isSymmetricList([])).toBe(false);
  });

  test('should return true when numberList is symmetric ', () => {
    expect(isSymmetricList([1])).toBe(true);
    expect(isSymmetricList([1, 2, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 3])).toBe(false);
  });
});
