const isFreeShip = (product) => product['isFreeShip'];
export const findAllProducts = (productList) => productList.filter(isFreeShip);
