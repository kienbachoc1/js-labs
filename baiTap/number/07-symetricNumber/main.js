export const isSymmetricNumber = (n) => {
  if (n <= 1 || n >= 1000000) return false;
  const arr = n.toString().split('');
  const arrRe = [...arr].reverse();
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arrRe[i]) return false;
  }
  return true;
};

export const isSymmetricNumberV2 = (n) => {
  if (n <= 1 || n >= 1000000) return false;
  const arr = n.toString().split('');
  const arrRe = [...arr].reverse();
  let flag = true;
  arr.forEach((_, i) => {
    if (arr[i] !== arrRe[i]) flag = false;
  });

  return flag;
};
