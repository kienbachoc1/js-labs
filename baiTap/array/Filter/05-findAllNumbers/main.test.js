import { findAllNumbers } from './main';

describe('Name of the group', () => {
  test('should ', () => {
    expect(findAllNumbers([1, 3, 5])).toEqual([]); // []
    expect(findAllNumbers([1, 2, 5])).toEqual([]); // [] bởi vì có duy một số dương chẳn đầu tiên, mà số này không bao gồm trong mảng kết qua
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]); // [4, 4] vì có 3 số 4, bỏ đi một số đầu tiên thì còn lại 2 sô
  });
});
