// Create a function truncate(text, maxlength) that checks the length of the text and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

const truncate = (text, maxlength) => {
  if (text.length <= maxlength) return text;

  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
};

console.log(truncate('kien', 4));
console.log(truncate('kien trung', 4));

function getFullName(firstName, lastName) {
  // your code here
  if (!firstName && !lastName) return '';
  firstName = firstName.trim();
  lastName = lastName.trim();
  if ((firstName && !lastName) || (!firstName && lastName))
    return (
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() ||
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
    );
  return `${firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()} ${
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
  }`;
}
console.log(getFullName(' ngUYEN', ' kIEN '));
