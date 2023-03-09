export const remove = (arr, k, n) => {
  if (!n) {
    arr.splice(0, arr.length);
    return arr;
  }
  if (k < 0 || k >= arr.length) return arr;
  arr.splice(k, n);
  return arr;
};
