"use strict";
exports.__esModule = true;
exports.G964 = exports.Challenge = exports.dirReduc = exports.sumFibs = exports.foldArray = exports.tribonacci = exports.Kata = exports.findNeedle = exports.findSmallestInt = void 0;
//11-10-2020 'Find the smallest integer 
function findSmallestInt(args) {
    return args.sort(function (a, b) { return a - b; })[0];
}
exports.findSmallestInt = findSmallestInt;
//11-10-2020 'Needle in a haystack'
function findNeedle(haystack) {
    var needleIndex = haystack.findIndex(function (element) { return element === "needle"; });
    return "found the needle at position " + needleIndex;
}
exports.findNeedle = findNeedle;
//11-12-2020 'Stop gninnipS My sdroW!'
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.spinWords = function (words) {
        var wordsArr = words.split(' ');
        var spunArr = wordsArr.map(function (word) {
            if (word.length > 4) {
                return word.split('').reverse().join('');
            }
            return word;
        });
        return spunArr.join(' ');
    };
    return Kata;
}());
exports.Kata = Kata;
//11-12-2020 'Tribonacci Sequence'
function tribonacci(_a, n) {
    var a = _a[0], b = _a[1], c = _a[2];
    if (n !== 0 && n > 2) {
        var currentTrib = 0;
        var sequenceArr = [a, b, c];
        for (var i = 2; i <= n - 2; i++) {
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
    var foldedArray = [];
    var newArray = array.slice();
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
    var start = 0;
    var next = 1;
    var current;
    var sumOdd = 0;
    for (var i = 0; i <= num; i++) {
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
    var directionStack = [];
    arr.forEach(function (element) {
        if (!directionStack) {
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
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var divisibleBy3Or5 = [];
        if (number <= 3) {
            return 0;
        }
        console.log(number);
        for (var current = 3; current < number; current++) {
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
        return divisibleBy3Or5.reduce(function (acc, element) { return acc + element; });
    };
    return Challenge;
}());
exports.Challenge = Challenge;
//11/25/2020 '6kyu- Which are in'
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.inArray = function (a1, a2) {
        var substringSet = new Set();
        a2.forEach(function (outerWord) {
            a1.forEach(function (innerWord) {
                if (outerWord.includes(innerWord)) {
                    substringSet.add(innerWord);
                }
            });
        });
        var substringArr = Array.from(substringSet);
        return substringArr;
    };
    return G964;
}());
exports.G964 = G964;
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
var a1 = ["arp", "live", "strong"];
console.log(G964.inArray(a1, a2));
