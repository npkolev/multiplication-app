import { isMultipleNum } from '../src/utils/helpers';

describe('The isMultipleNum function', () => {
    it('should return true if the first argument is multiple of the second', () => {
        expect(isMultipleNum(10, 5)).toBe(true);
    });

    it('should return false if first argument is not multiple of the second', () => {
        expect(isMultipleNum(20, 7)).toBe(false);
    });
});
