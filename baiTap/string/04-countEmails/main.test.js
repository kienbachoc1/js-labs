import { countEmails, isEmail } from './main';
describe('countEmails(str)', () => {
  test('should return 0 when str empty Email', () => {
    expect(countEmails('')).toBe(0);
    expect(countEmails('my email should be super.com')).toBe(0);
  });
  test('should return 0 when str has Email is vald', () => {
    expect(countEmails('my email should be  a@a.com')).toBe(0);
    expect(countEmails('my email should be  abc@a.com')).toBe(0);
    expect(countEmails('my email should be  a@abc.com')).toBe(0);
    expect(countEmails('my email should be  @ bla .com')).toBe(0);
  });
  test('should return count number when str has Email', () => {
    expect(
      countEmails(
        'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn'
      )
    ).toBe(3);
  });
});

describe('isEmail(str)', () => {
  test('should return 0 when str is not email', () => {
    expect(countEmails('')).toBe(0);
    expect(countEmails('my')).toBe(0);
  });
  test('should return 0 when Email is vald', () => {
    expect(countEmails('a@a.com')).toBe(0);
    expect(countEmails('abc@a.com')).toBe(0);
    expect(countEmails('a@abc.com')).toBe(0);
    expect(countEmails('@ bla .com')).toBe(0);
  });
});
