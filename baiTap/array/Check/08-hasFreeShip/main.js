const isFreeShip = (product, prices) => {
  const { isFreeShip, price } = product;
  return isFreeShip === true && price < prices;
};
export const hasFreeShip = (productList, price) => productList.some((x) => isFreeShip(x, price));
