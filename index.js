"use strict";
exports.__esModule = true;
exports.sumFibs = exports.foldArray = exports.tribonacci = exports.Kata = exports.findNeedle = exports.findSmallestInt = void 0;
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

