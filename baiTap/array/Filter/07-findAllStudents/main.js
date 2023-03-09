const isMath = (student) => student['math'] < 5;
export const findAllStudents = (studentList) => studentList.filter(isMath);
