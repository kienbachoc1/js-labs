import { statisticsWords } from './main';

describe('statisticsWords(str)', () => {
  test('should return an object', () => {
    expect(statisticsWords('')).toEqual(undefined);
    expect(statisticsWords('easy frontend easy')).toEqual({
      easy: 2,
      frontend: 1,
    });
    expect(statisticsWords('  easy   frontend    easy   ')).toEqual({
      easy: 2,
      frontend: 1,
    });
  });
});
