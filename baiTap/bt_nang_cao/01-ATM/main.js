// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

const printMoney = (amount) => {
  let amountNew = amount;
  let quantity_k500 = K500_QUANTITY;
  let quantity_k200 = K200_QUANTITY;
  let quantity_k100 = K100_QUANTITY;
  let quantity_k50 = K50_QUANTITY;
  const result = {
    k500: 0,
    k200: 0,
    k100: 0,
    k50: 0,
  };

  while (amountNew >= K500_VALUE && quantity_k500 > 0) {
    result['k500'] += 1;
    amountNew -= K500_VALUE;
    quantity_k500 -= 1;
  }
  while (amountNew >= K200_VALUE && quantity_k200 > 0) {
    result['k200'] += 1;
    amountNew -= K200_VALUE;
    quantity_k200 -= 1;
  }
  while (amountNew >= K100_VALUE && quantity_k100 > 0) {
    result['k100'] += 1;
    amountNew -= K100_VALUE;
    quantity_k100 -= 1;
  }
  while (amountNew >= K50_VALUE && quantity_k50 > 0) {
    result['k50'] += 1;
    amountNew -= K50_VALUE;
    quantity_k50 -= 1;
  }
  return result;
};

export const withdraw = (amount) => {
  let balance =
    K500_QUANTITY * K500_VALUE +
    K200_QUANTITY * K200_VALUE +
    K100_QUANTITY * K100_VALUE +
    K50_QUANTITY * K50_VALUE;
  if (amount % BASE_UNIT !== 0) return 'Invalid balance';
  if (balance - amount < 0) return 'Insufficient balance from ATM';
  balance -= amount;
  return printMoney(amount);
};

console.log(withdraw(850000));
console.log(withdraw(200000));
console.log(withdraw(9000000));
