const SPECIAL_CHARACTERS = '!@#$%^&*()'.split('');

const isUpperCase = (str) => str === str.toUpperCase();
const isSpecialCharacter = (str) => SPECIAL_CHARACTERS.includes(str);
const isNumber = (str) => Number(str);

export const isStrongPassword = (password) => {
  const arrPassword = password.split('');
  let hasUpperCase = false;
  let hasSpecialCharacter = false;
  let hasNumber = false;
  arrPassword.forEach((str) => {
    if (isUpperCase(str)) hasUpperCase = true;
    if (isSpecialCharacter(str)) hasSpecialCharacter = true;
    if (isNumber(str)) hasNumber = true;
  });
  return hasUpperCase && hasSpecialCharacter && hasNumber && password.length >= 8;
};
