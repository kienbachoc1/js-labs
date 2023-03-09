import { findSecondLargestNumber } from './main';

describe('findSecondLargestNumber(numberList)', () => {
  test('should return undefined when numberList empty or length < 2', () => {
    expect(findSecondLargestNumber([])).toBe(undefined);
    expect(findSecondLargestNumber([1])).toBe(undefined);
  });

  test('should return number when numberList is length > 2', () => {
    expect(findSecondLargestNumber([1, 2])).toBe(1);
    expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
  });
});
