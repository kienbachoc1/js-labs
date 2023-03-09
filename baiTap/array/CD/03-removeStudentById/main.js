export const removeStudentById = (studentList, studentId) =>
  studentList.filter((std) => std.id !== studentId);
