//flag
const isPositiveEvenNumber = (n) => {
  if (n > 0 && n % 2 === 0) return true;
  return false;
};

//v2
const isPositiveEvenNumberV2 = (n) => n > 0 && n % 2 === 0; // return true/false

console.log(isPositiveEvenNumber(2));
console.log(isPositiveEvenNumberV2(5));
