import { statisticsCharacters } from './main';

describe('statisticsCharacters(str)', () => {
  test('return undefined when str empty', () => {
    expect(statisticsCharacters('')).toEqual(undefined);
  });
  test('return an object like this: { a: 2, b: 1, c: 2, space: 3 }', () => {
    expect(statisticsCharacters('aa b cc ')).toEqual({ a: 2, b: 1, c: 2, space: 3 });
  });
});
