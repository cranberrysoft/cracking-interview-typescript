import { Solution } from "../../../src/chapter1/task_1_4/Solution";


describe('Task1_4', () => {
    const solution = new Solution()

    it('should return empty result for empty input', () => {
        expect(solution.palindromePermutations('')).toBeTrue()
    })

    it('should return palindromes for single character', () => {
        expect(solution.palindromePermutations('a')).toBeTrue()

    })

    it('should return palindromes if all characters the same', () => {
        expect(solution.palindromePermutations('aaaaa')).toBeTrue()
    })

    it('should return palindromes for even characters', () => {
        expect(solution.palindromePermutations('aabb')).toBeTrue();
    })

    it('should return palindromes for odd characters', () => {
        expect(solution.palindromePermutations('aab')).toBeTrue();
    })

    it('should not return palindromes when more then one character is no even ', () => {
        expect(solution.palindromePermutations('aabc')).toBeFalse();
    })

    it('should return palindromes for odd characters excluding empty characters', () => {
        expect(solution.palindromePermutations('aa b')).toBeTrue();
    })
})


