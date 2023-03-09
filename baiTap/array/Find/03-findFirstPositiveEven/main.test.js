import { findFirstPositiveEven } from './main';

describe('findFirstPositiveEven(numberList)', () => {
  test('should return undefined when numberList is empty', () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
  });

  test('should return string number when numberList has not number positive even', () => {
    expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
    expect(findFirstPositiveEven([-1, -4, 1, 3, 5])).toBe(undefined);
  });
  test('should return string number when numberList has number positive even', () => {
    expect(findFirstPositiveEven([-1, -4, 1, 4, 5])).toBe(4);
  });
});
