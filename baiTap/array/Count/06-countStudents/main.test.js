import { countStudents } from './main';

describe('Name of the group', () => {
  test('should', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 8 } },
      { id: 2, name: 'Bob', marks: { math: 9 } },
    ];
    expect(countStudents(studentList, 7)).toBe(2);
  });

  test('should ', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
      { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
    ];
    expect(countStudents(studentList, 7)).toBe(1);
  });
});
