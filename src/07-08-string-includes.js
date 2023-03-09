//Check if a string contains an email address with @gmail.com or not.
const hasEmail = (str) => str.includes('@gmail.com');

console.log(hasEmail('kien@gmail.com'));
console.log(hasEmail('kien@uef.edu.com'));
console.log(hasEmail('kien@vinova.com.sg'));
