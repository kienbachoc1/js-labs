import { findLastStudentHavingMinAvg } from './main';

describe('findLastStudentHavingMinAvg(studentList)', () => {
  test('should ', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9, english: 9 },
      { id: 2, name: 'Bob', math: 5, english: 5 },
      { id: 3, name: 'John', math: 5, english: 5 },
    ];
    expect(findLastStudentHavingMinAvg(studentList)).toEqual({
      id: 3,
      name: 'John',
      math: 5,
      english: 5,
    });
  });
});
