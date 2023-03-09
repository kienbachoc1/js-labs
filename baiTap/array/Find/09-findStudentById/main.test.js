import { findStudentById } from './main';

describe(' findStudentById(studentList, studentId)', () => {
  test('should ', () => {
    const studentList = [
      { id: 1, name: 'Easy' },
      { id: 2, name: 'Frontend' },
    ];
    expect(findStudentById(studentList, 1)).toBe(0);
    expect(findStudentById(studentList, 3)).toBe(-1);
  });
});
