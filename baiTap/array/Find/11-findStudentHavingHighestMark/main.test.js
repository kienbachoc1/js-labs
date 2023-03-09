import { findStudentHavingHighestMark } from './main';

describe('findStudentHavingHighestMark(studentList)', () => {
  test('should ', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 10 },
      { id: 3, name: 'John', math: 10 },
    ];
    expect(findStudentHavingHighestMark(studentList)).toEqual({ id: 2, name: 'Bob', math: 10 });
  });
});
