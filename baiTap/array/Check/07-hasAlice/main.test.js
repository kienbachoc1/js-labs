import { hasAlice } from './main';

describe('hasAlice(studentList)', () => {
  test('should return false when dont find student', () => {
    expect(hasAlice([])).toBe(false);
    expect(
      hasAlice([
        { id: 1, name: 'Alice', gender: 'male' },
        { id: 2, name: 'cscsc', gender: 'female' },
        { id: 3, name: 'Easy Frontend', gender: 'male' },
      ])
    ).toBe(false);
  });

  test('should return true when find student', () => {
    expect(hasAlice([])).toBe(false);
    expect(
      hasAlice([
        { id: 1, name: 'Alice', gender: 'male' },
        { id: 2, name: 'aliCE', gender: 'female' },
        { id: 3, name: 'Easy Frontend', gender: 'male' },
      ])
    ).toBe(true);
  });
});
