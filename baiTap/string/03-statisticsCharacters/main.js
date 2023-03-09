export const statisticsCharacters = (str) => {
  if (str.length === 0) return undefined;
  const result = {};
  str.split('').forEach((x) => {
    if (x === ' ') return 'space' in result ? (result['space'] += 1) : (result['space'] = 1);
    return x in result ? (result[x] += 1) : (result[x] = 1);
  });
  return result;
};
