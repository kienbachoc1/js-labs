export const findProductByCode = (productList, code) =>
  productList.findIndex((x) => x.code === code);
