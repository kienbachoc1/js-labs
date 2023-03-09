export const classifyStudent = (mark) => {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';
  return 'Bad';
};

console.log(classifyStudent(11));

// B1: validate arguments
// B2: logic
// B3: return
