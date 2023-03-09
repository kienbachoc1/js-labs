import { hasStudent } from './main';

describe('hasStudent(studentList, studentId)', () => {
  test('should return false when all item of array is Truthy', () => {
    expect(
      hasStudent(
        [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        3
      )
    ).toBe(false);
  });

  test('should return true when one item of array is falsy', () => {
    expect(
      hasStudent(
        [
          { id: 1, name: 'Alice', gender: 'male' },
          { id: 2, name: 'aliCE', gender: 'female' },
          { id: 3, name: 'Easy Frontend', gender: 'male' },
        ],
        2
      )
    ).toBe(true);
  });
});
