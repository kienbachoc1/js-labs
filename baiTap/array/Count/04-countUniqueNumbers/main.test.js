import { countUniqueNumbers } from './main';
describe('Name of the group', () => {
  test('should ', () => {
    expect(countUniqueNumbers([])).toBe(0);
    expect(countUniqueNumbers([1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
    expect(countUniqueNumbers([1, 2, 2, 3, 1])).toBe(3);
  });
});
