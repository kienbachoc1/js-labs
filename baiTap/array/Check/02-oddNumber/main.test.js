import { hasOddNumberDivisibleBy3 } from './main';

describe('hasOddNumberDivisibleBy3(numberList)', () => {
  test('should return false when array empty', () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
  });
  test('should return false when array has not odd number', () => {
    expect(hasOddNumberDivisibleBy3([2, 4, 6])).toBe(false);
  });
  test('should return false when array has not number divisible 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 5, 7])).toBe(false);
  });
  test('should return false when array has odd number divisible 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 9])).toBe(true);
  });
});
