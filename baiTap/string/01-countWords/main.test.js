import { countWords } from './main';

describe('countWords(str)', () => {
  test('should return number', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('    ')).toBe(0);
    expect(countWords('easy')).toBe(1);
    expect(countWords('easy frontend')).toBe(2);
    expect(countWords(' easy frontend ')).toBe(2);
    expect(countWords('easy    frontend')).toBe(2);
  });
});
