const isAlice = (student) => {
  const { name, gender } = student;
  return name.toLowerCase() === 'alice' && gender === 'female';
};

export const hasAlice = (studentList) => studentList.some(isAlice);
