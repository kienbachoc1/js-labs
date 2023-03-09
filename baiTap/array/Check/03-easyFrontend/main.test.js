import { hasEasyFrontend } from './main';

describe(' hasEasyFrontend(wordList)', () => {
  test('should return false when wordList empty', () => {
    expect(hasEasyFrontend([])).toBe(false);
  });

  test('should return false when wordList has not easy and front', () => {
    expect(hasEasyFrontend(['cd', 'vdsvsv'])).toBe(false);
  });

  test('should return false when wordList has only easy', () => {
    expect(hasEasyFrontend(['easy', ''])).toBe(false);
  });

  test('should return false when wordList has only frontend', () => {
    expect(hasEasyFrontend(['frontend', 'ssdfsf'])).toBe(false);
  });

  test('should return true when wordList have frontend and easy', () => {
    expect(hasEasyFrontend(['easy', 'frontend'])).toBe(true);
    expect(hasEasyFrontend(['easy frontend', ''])).toBe(true);
    expect(hasEasyFrontend(['frontend easy', ''])).toBe(true);
  });
});
