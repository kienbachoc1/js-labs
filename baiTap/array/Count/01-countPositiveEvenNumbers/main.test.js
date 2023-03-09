import { countPositiveEvenNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(countPositiveEvenNumbers([-2, -1])).toBe(0);
    expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toBe(2); // 2 (2 và 4 thoả điều kiện)
  });
});
