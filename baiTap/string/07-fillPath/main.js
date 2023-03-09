export const fillPath = (path, params) => {
  const keyList = Object.keys(params);
  if (path === '' && keyList.length === 0) return '';
  let result = path;
  keyList.forEach((key) => (result = result.replace(`:${key}`, params[key])));
  return result;
};
