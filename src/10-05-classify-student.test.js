import { classifyStudent } from './05-09-main';

describe('classifyStudent()', () => {
  test('should return Invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudent(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudent(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when pass invalid n > 8', () => {
    expect(classifyStudent(9)).toBe('Excellence');
    expect(classifyStudent(10)).toBe('Excellence');
  });

  test('should return Good when pass invalid n in [7-8]', () => {
    expect(classifyStudent(7)).toBe('Good');
    expect(classifyStudent(8)).toBe('Good');
  });

  test('should return Not Good when pass invalid n in [4-6]', () => {
    [4, 5, 6].map((x) => expect(classifyStudent(x)).toBe('Not Good'));
  });

  test('should return Bad when pass invalid n in [1-3]', () => {
    [1, 2, 3].map((x) => expect(classifyStudent(x)).toBe('Bad'));
  });
});
