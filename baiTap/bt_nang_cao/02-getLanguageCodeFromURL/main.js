// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

const findLanguage = (language) => {
  if (language && SUPPORTED_LANGUAGE_LIST.includes(language)) return language;
  return DEFAULT_LANGUAGE;
};

export const getLanguageCodeFromURL = (url) => {
  const arrURL = url.split('/');
  return findLanguage(arrURL[3]);
};
