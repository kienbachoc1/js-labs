const isIphone = (product) => {
  const strName = product['name'].toLowerCase();
  return strName.includes('iphone') && product['amount'] > 0;
};
export const findAllIphones = (productList) => productList.filter(isIphone);
