export const hasEasyFrontend = (wordList) => {
  if (wordList.length === 0) return false;

  const hasEasy = wordList.includes('easy');
  const hasFrontend = wordList.includes('frontend');
  const hasEasyFrontend = wordList.includes('easy frontend') || wordList.includes('frontend easy');

  return (hasEasy && hasFrontend) || hasEasyFrontend;
};
