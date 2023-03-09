export const findStudentHavingHighestMark = (studentList) => {
  const markMax = studentList.map((x) => x.math).sort((a, b) => b - a)[0];
  return studentList.find((x) => x.math === markMax);
};
