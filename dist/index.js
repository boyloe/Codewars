"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.closest = exports.longestConsec = exports.G964 = exports.Challenge = exports.dirReduc = exports.sumFibs = exports.foldArray = exports.tribonacci = exports.Kata = exports.findNeedle = exports.findSmallestInt = void 0;
//11-10-2020 'Find the smallest integer 
function findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
}
exports.findSmallestInt = findSmallestInt;
//11-10-2020 'Needle in a haystack'
function findNeedle(haystack) {
    const needleIndex = haystack.findIndex((element) => element === "needle");
    return `found the needle at position ${needleIndex}`;
}
exports.findNeedle = findNeedle;
//11-12-2020 'Stop gninnipS My sdroW!'
class Kata {
    static spinWords(words) {
        const wordsArr = words.split(' ');
        const spunArr = wordsArr.map((word) => {
            if (word.length > 4) {
                return word.split('').reverse().join('');
            }
            return word;
        });
        return spunArr.join(' ');
    }
}
exports.Kata = Kata;
//11-12-2020 'Tribonacci Sequence'
function tribonacci([a, b, c], n) {
    if (n !== 0 && n > 2) {
        let currentTrib = 0;
        let sequenceArr = [a, b, c];
        for (let i = 2; i <= n - 2; i++) {
            currentTrib = sequenceArr[i] + sequenceArr[i - 1] + sequenceArr[i - 2];
            sequenceArr.push(currentTrib);
        }
        return sequenceArr;
    }
    else if (n === 1) {
        return [a];
    }
    else if (n === 2) {
        return [a, b];
    }
    else {
        return [];
    }
}
exports.tribonacci = tribonacci;
//11-13-2020 'Fold an Array'
function foldArray(array, runs) {
    let foldedArray = [];
    let newArray = array.slice();
    while (newArray.length > 1) {
        foldedArray.push(newArray[0] + newArray[newArray.length - 1]);
        newArray = newArray.slice(1, newArray.length - 1);
    }
    if (newArray.length > 0) {
        foldedArray.push(newArray[0]);
    }
    if (runs > 1) {
        return foldArray(foldedArray, runs - 1);
    }
    return foldedArray;
}
exports.foldArray = foldArray;
//11 -17-2020 'sumFibs'
function sumFibs(num) {
    let start = 0;
    let next = 1;
    let current;
    let sumOdd = 0;
    for (let i = 0; i <= num; i++) {
        current = start + next;
        start = next;
        next = current;
        console.log(current);
        if (current % 2 !== 0 && current <= num) {
            sumOdd = current + sumOdd;
        }
    }
    console.log(sumOdd);
    return sumOdd + 1;
}
exports.sumFibs = sumFibs;
//11-19-2020 '5kyu - Directions Reduction'
function dirReduc(arr) {
    let directionStack = [];
    arr.forEach((element) => {
        if (directionStack[0] === undefined) {
            directionStack.push(element);
        }
        else if ((element === 'NORTH' && directionStack[directionStack.length - 1] === 'SOUTH')
            || (element === 'SOUTH' && directionStack[directionStack.length - 1] === 'NORTH')) {
            directionStack.pop();
        }
        else if ((element === 'EAST' && directionStack[directionStack.length - 1] === 'WEST')
            || (element === 'WEST' && directionStack[directionStack.length - 1] === 'EAST')) {
            directionStack.pop();
        }
        else {
            directionStack.push(element);
        }
    });
    return directionStack;
}
exports.dirReduc = dirReduc;
//11-2020 '6kyu - Multples of 3 or 5'
class Challenge {
    static solution(number) {
        const divisibleBy3Or5 = [];
        if (number <= 3) {
            return 0;
        }
        console.log(number);
        for (let current = 3; current < number; current++) {
            if (current % 3 === 0 && current % 5 === 0) {
                divisibleBy3Or5.push(current);
            }
            else if (current % 3 === 0) {
                divisibleBy3Or5.push(current);
            }
            else if (current % 5 === 0) {
                divisibleBy3Or5.push(current);
            }
            else {
                continue;
            }
        }
        return divisibleBy3Or5.reduce((acc, element) => acc + element);
    }
}
exports.Challenge = Challenge;
//11/25/2020 '6kyu- Which are in'
class G964 {
    static inArray(a1, a2) {
        const substringSet = new Set();
        a2.forEach((outerWord) => {
            a1.forEach((innerWord) => {
                if (outerWord.includes(innerWord)) {
                    substringSet.add(innerWord);
                }
            });
        });
        const substringArr = Array.from(substringSet);
        const sortedSubstringArr = substringArr.sort();
        return sortedSubstringArr;
    }
}
exports.G964 = G964;
//Clever solution to Which are in
// export class G964 {
//     public static inArray(a1: string[], a2: string[]): string[] {
//       return a1.filter(a => a2.some(b => b.includes(a))).sort();
//     }
//   }
//11-26-2020 '6-kyu Consecutive Strings'
function longestConsec(strArr, k) {
    if (strArr.length === 0 || k > strArr.length || k <= 0) {
        return '';
    }
    else {
        const solutionStack = [''];
        let largestWordCombo = strArr[0];
        let currentWordCombo;
        for (let i = 0; i <= strArr.length - k; i++) {
            currentWordCombo = strArr.slice(i, i + k).join('');
            if (currentWordCombo.length > largestWordCombo.length) {
                largestWordCombo = currentWordCombo;
                solutionStack.length = 0;
                solutionStack.push(largestWordCombo);
            }
            else {
                continue;
            }
        }
        return solutionStack[0];
    }
}
exports.longestConsec = longestConsec;
//11-28-2020 '5kyu-Closest and Smallest'
function closest(strng) {
    return [[20], [20]];
}
exports.closest = closest;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
