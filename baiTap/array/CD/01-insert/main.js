export const insert = (arr, newItem, k) => {
  if (k < 0) {
    arr.unshift(newItem);
    return arr;
  }
  if (k > arr.length) {
    arr.push(newItem);
    return arr;
  }

  arr.splice(k, 0, newItem);
  return arr;
};
