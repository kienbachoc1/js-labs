import { getDisplayedAddress } from './main';

describe('getDisplayedAddress(address)', () => {
  test('should return empty string when object address empty', () => {
    expect(getDisplayedAddress({})).toBe('');
  });
  test('should return address when object address', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
  });
  expect(
    getDisplayedAddress({
      street: 'Nguyen Cong Tru',
      district: 'Binh Thanh District',
    })
  ).toBe('Nguyen Cong Tru, Binh Thanh District');
});
