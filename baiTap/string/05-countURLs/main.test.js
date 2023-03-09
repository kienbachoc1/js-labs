import { countURLs, isURL } from './main';

describe('countURLs(str)', () => {
  test('should return 0 when str empty URL', () => {
    expect(countURLs('')).toBe(0);
    expect(countURLs('my website is: xxx you can visit it')).toBe(0);
  });
  test('should return 0 when str has URL but it is vald', () => {
    expect(countURLs('my website is: https://ez.com you can visit it')).toBe(0);
    expect(countURLs('my website is: https://ez.co you can visit it')).toBe(0);
    expect(countURLs('my website is: https://ez .com you can visit it')).toBe(0);
    expect(countURLs('my website is: scscs://ez .com you can visit it')).toBe(0);
  });
  test('should return count number when str has URL', () => {
    expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1);
  });
});

describe('isURL(str)', () => {
  test('should return 0 when str empty URL', () => {
    expect(isURL('')).toBe(false);
    expect(isURL('xxx')).toBe(false);
  });
  test('should return 0 when str has URL but it is vald', () => {
    expect(isURL('https://ez.com')).toBe(false);
    expect(isURL('https://ez.co')).toBe(false);
    expect(isURL('https://ez')).toBe(false);
    expect(isURL('scscs://ez.com')).toBe(false);
    expect(isURL('http://ezfrontend.comx')).toBe(false);
  });
  test('should return count number when str has URL', () => {
    expect(isURL('http://ezfrontend.com')).toBe(true);
  });
});
