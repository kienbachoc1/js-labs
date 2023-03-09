export const getDisplayedAddress = (address) => {
  const arr = Object.keys(address);

  if (arr.length === 0) return '';

  let result = '';
  arr.forEach((x, index) => {
    if (x === 'number') return (result += `${address[x]} `);
    if (x === 'street') return (result += `${address[x]}, `);
    if (index === arr.length - 1) return (result += `${address[x]}`);
    return (result += `${address[x]}, `);
  });
  return result;
};

// console.log(
//   getDisplayedAddress({
//     number: 123,
//     street: 'Nguyen Cong Tru',
//     ward: 'Ward 11',
//     district: 'Binh Thanh District',
//     city: 'HCMC',
//   })
// );
