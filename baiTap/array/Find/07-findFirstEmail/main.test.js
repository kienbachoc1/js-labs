import { findFirstEmail } from './main';

describe('findFirstEmail(strList)', () => {
  test('should return undefined when strList is empty', () => {
    expect(findFirstEmail([])).toBe(undefined);
  });

  test('should return undefined when strList has not email', () => {
    expect(findFirstEmail(['abc@easy.frontend'])).toBe(undefined);
  });

  test('should return email when strList has emails', () => {
    expect(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
  });
});
