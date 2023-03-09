import { isDivisibleBy10 } from './main';

describe('isDivisibleBy10(n)', () => {
  test('should return false when n != [0-1000000]', () => {
    expect(isDivisibleBy10(-1)).toBe(false);
    expect(isDivisibleBy10(1100000)).toBe(false);
  });

  test('should return false when n is divisible by 10', () => {
    expect(isDivisibleBy10(10)).toBe(false);
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(123455)).toBe(true);
  });
});
