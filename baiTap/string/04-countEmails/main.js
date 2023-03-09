const DOMAIN = ['.com', '.vn', '.com.vn'];

export const isEmail = (str) => {
  if (!str.includes('@')) return false;
  let [x, y] = str.split('@');
  if (x.length < 3 || y.slice(0, y.indexOf('.')).length < 3) return false;
  if (!DOMAIN.includes(y.slice(y.indexOf('.'), y.length))) return false;
  return true;
};

export const countEmails = (str) => str.split(' ').filter(isEmail).length;
