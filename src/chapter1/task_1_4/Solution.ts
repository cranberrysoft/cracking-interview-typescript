export class Solution {

    palindromePermutations(str: string): boolean {
        var dup = {
            ala: "a",
            berla: 'bel'
        }
        var newVar = {...dup};

        console.log(newVar)
        if (new Set(str.split("")).size <= 1) {
            return true
        }
        const characterToCount = this.charactersCounts(str);
        const odds = characterToCount.filter(a => a % 2 === 0).length;
        return odds >= characterToCount.length - 1;
    }

    charactersCounts(str: string): number[] {
        const characterToCount = new Map<string, number>();
        str.split("")
            .filter(it => it != " ")
            .map(it => it.toLowerCase())
            .forEach(
                item => {
                    if (characterToCount.has(item)) {
                        const counter = characterToCount.get(item)!;
                        characterToCount.set(item, counter + 1);
                    } else {
                        characterToCount.set(item, 1);
                    }
                }
            )
        return [...characterToCount.values()];
    }
}
