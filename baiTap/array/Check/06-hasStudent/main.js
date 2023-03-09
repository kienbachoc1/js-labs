export const hasStudent = (studentList, studentId) =>
  !!studentList.find((student) => student.id === studentId);
