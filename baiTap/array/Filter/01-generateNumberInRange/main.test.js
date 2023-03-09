import { generateNumberInRange } from './main';

describe('generateNumberInRange(a, b)', () => {
  test('should ', () => {
    expect(generateNumberInRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRange(5, 7)).toEqual([5, 6, 7]);
    expect(generateNumberInRange(7, 5)).toEqual([]);
  });
});
