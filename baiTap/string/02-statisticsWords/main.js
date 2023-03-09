export const statisticsWords = (str) => {
  if (str.length === 0) return undefined;
  const result = {};
  const arr = str.split(' ').filter((x) => x !== '');
  arr.forEach((x) => (x in result ? (result[x] += 1) : (result[x] = 1)));
  return result;
};
