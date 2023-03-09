import { generateFibonaci } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(generateFibonaci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(generateFibonaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
