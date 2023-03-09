import { withdraw } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(withdraw(850000)).toEqual({ k500: 1, k200: 1, k100: 1, k50: 1 });
    expect(withdraw(200000)).toEqual({ k500: 0, k200: 1, k100: 0, k50: 0 });
    expect(withdraw(9000000)).toEqual('Insufficient balance from ATM');
  });
  test('should return Invalid balance', () => {
    expect(withdraw(125000)).toEqual('Invalid balance');
  });

  test('should ', () => {
    expect(withdraw(7850000)).toEqual({ k500: 2, k200: 5, k100: 10, k50: 97 });
    expect(withdraw(100000)).toEqual({ k500: 0, k200: 0, k100: 1, k50: 0 });
    expect(withdraw(50000)).toEqual({ k500: 0, k200: 0, k100: 0, k50: 1 });
    expect(withdraw(200000)).toEqual({ k500: 0, k200: 1, k100: 0, k50: 0 });
    expect(withdraw(500000)).toEqual({ k500: 1, k200: 0, k100: 0, k50: 0 });
    expect(withdraw(700000)).toEqual({ k500: 1, k200: 1, k100: 0, k50: 0 });
    expect(withdraw(800000)).toEqual({ k500: 1, k200: 1, k100: 1, k50: 0 });
    expect(withdraw(850000)).toEqual({ k500: 1, k200: 1, k100: 1, k50: 1 });
  });
});
