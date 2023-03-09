export const generateNumberInRange = (a, b) => {
  if (a > b) return [];
  if (a === b) return [a];
  const result = [];
  for (let i = a; i <= b; i++) result.push(i);
  return result;
};
