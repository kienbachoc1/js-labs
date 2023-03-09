const isWords = (word, n) => word.length >= n;

export const countWords = (wordList, n) => wordList.filter((e) => isWords(e, n)).length;
