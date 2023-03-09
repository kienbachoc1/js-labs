import { findLongestWord } from './main';

describe('findLongestWord(wordList)', () => {
  test('should return undefined when wordList is empty', () => {
    expect(findLongestWord([])).toBe('');
  });
  test('should return string number when wordList has string with length <= 5 and none space', () => {
    expect(findLongestWord(['super', 'cool'])).toBe('super');
    expect(findLongestWord(['super', 'super cool'])).toBe('super');
  });
});
