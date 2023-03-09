import { isStrongPassword } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(isStrongPassword('')).toBe(false);
    expect(isStrongPassword('super strong')).toBe(false);
    expect(isStrongPassword('Sup3rC0o!')).toBe(true);
    expect(isStrongPassword('SupErCOo!')).toBe(false);
  });
});
