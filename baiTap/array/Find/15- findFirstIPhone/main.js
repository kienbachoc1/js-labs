const isIphone = (prod) => {
  const arr = prod['name'].split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === 'iphone') return true;
  }
  return false;
};

export const findFirstIPhone = (productList) => productList.find(isIphone);

// const productList = [
//   { id: 1, name: 'Samsung' },
//   { id: 2, name: 'IPHONE X' },
//   { id: 3, name: 'iPhone 12 Pro' },
// ];

// console.log(findFirstIPhone(productList));
