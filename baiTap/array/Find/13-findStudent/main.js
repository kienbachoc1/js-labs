const isStudent = (student) => {
  let d = 0;
  const arr = Object.keys(student.marks).map((x) => student.marks[x]);
  arr.forEach((x) => x < 5 && d++);
  return d === 1;
};

export const findStudent = (studentList) => {
  return studentList.find(isStudent);
};
