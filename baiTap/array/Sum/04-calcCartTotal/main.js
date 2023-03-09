const convertPrice = (prod) => prod.product.price * prod.quantity;

export const calcCartTotal = (cartItemList) =>
  cartItemList.map(convertPrice).reduce((sum, num) => sum + num, 0);
