const makeAvg = (marks) => {
  const arrMarks = Object.keys(marks).map((key) => marks[key]);
  const sum = arrMarks.reduce((sum, number) => sum + number, 0);
  return sum / arrMarks.length;
};

const isStudent = (student, avgMark) => makeAvg(student['marks']) >= avgMark;

export const countStudents = (studentList, avgMark) =>
  studentList.filter((std) => isStudent(std, avgMark)).length;
