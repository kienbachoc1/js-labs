import { statisticsNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(statisticsNumbers([])).toEqual({});
    expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({
      1: 3,
      2: 2,
      3: 1,
    });
  });
});
