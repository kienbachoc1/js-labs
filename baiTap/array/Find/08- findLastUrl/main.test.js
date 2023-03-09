import { findLastUrl } from './main';
describe('findLastUrl(strList)', () => {
  test('should return undefined when strList is empty', () => {
    expect(findLastUrl([])).toBe(undefined);
  });
  test('should url undefined when strList has urls', () => {
    expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
  });
});
