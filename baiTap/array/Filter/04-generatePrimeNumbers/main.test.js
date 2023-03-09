import { generatePrimeNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
