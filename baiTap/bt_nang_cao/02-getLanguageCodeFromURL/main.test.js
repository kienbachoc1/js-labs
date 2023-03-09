import { getLanguageCodeFromURL } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(getLanguageCodeFromURL('https://abc.com')).toBe('en');
    expect(getLanguageCodeFromURL('https://ezfrontend.com/abc')).toBe('en'); // 'en' vì abc là ngôn ngữ không được hỗ trợ
  });
  test('should ', () => {
    expect(getLanguageCodeFromURL('https://ezfrontend.com/en')).toBe('en');
    expect(getLanguageCodeFromURL('https://ezfrontend.com/cn')).toBe('cn');
    expect(getLanguageCodeFromURL('https://ezfrontend.com/vi/')).toBe('vi');
  });
});
