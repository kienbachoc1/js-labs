export const findLongestWord = (wordList) => {
  if (wordList.length === 0 || !Array.isArray(wordList)) return '';
  return wordList.filter((x) => x.length <= 5 && x === x.trim())[0];
};
