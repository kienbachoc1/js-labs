export const findStudentById = (studentList, studentId) => {
  return studentList.findIndex((x) => x.id === studentId);
};
