// Write a JavaScript function to parameterize a string.
// Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'

const parameterize = (str) => str.toLowerCase().replaceAll(' ', '-');

console.log(parameterize('Code JS Is Fun'));
