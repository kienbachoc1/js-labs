export const isSubArray = (a, b) => {
  if (a.length === 0) return true;
  if (a.length > b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) return false;
  }
  return true;
};
