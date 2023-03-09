const avg = (a, b) => (a + b) / 2;
export const findLastStudentHavingMinAvg = (studentList) => {
  const minAvg = studentList.map((x) => avg(x.math, x.english)).sort()[0];
  return studentList.filter((x) => avg(x.math, x.english) === minAvg).reverse()[0];
};
