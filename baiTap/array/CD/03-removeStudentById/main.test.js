import { removeStudentById } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    const studentList = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    expect(removeStudentById(studentList, 1)).toEqual([{ id: 2, name: 'Bob' }]);
    expect(removeStudentById(studentList, 3)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });
});
