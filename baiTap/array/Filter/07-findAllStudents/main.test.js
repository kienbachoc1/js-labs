import { findAllStudents } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ];
    expect(findAllStudents(studentList)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });
});
