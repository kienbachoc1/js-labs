const DOMAIN = ['com', 'vn'];
const PROTOCOL = ['http', 'https', 'ws', 'wss'];

const hasDomain = (y) => {
  const arr = y.slice(y.indexOf('.'), y.length).split('.');
  for (let i = 0; i < arr.length; i++) {
    if (DOMAIN.includes(arr[i])) return true;
  }
  return false;
};

export const isURL = (str) => {
  if (!str.includes('://')) return false;

  //x://y
  let [x, y] = str.split('://');
  let isNotEmail = !PROTOCOL.includes(x) || !hasDomain(y) || y.slice(0, y.indexOf('.')).length < 3;

  if (isNotEmail) return false;
  return true;
};

export const countURLs = (str) => str.split(' ').filter(isURL).length;
