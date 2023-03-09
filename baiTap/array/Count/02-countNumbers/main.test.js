import { countNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(countNumbers([1, 2, 3])).toBe(0);
    expect(countNumbers([1, 2, 3, 10, 9, 8])).toBe(2); // 2 (9 và 8 thoả điều kiện)
  });
});
