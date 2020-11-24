import { multiply } from "lodash"

//11-10-2020 'Find the smallest integer 
export function findSmallestInt(args: number[]): number {
    return args.sort((a:number, b:number)=> a-b)[0]
}

//11-10-2020 'Needle in a haystack'
export function findNeedle(haystack: any[]):string {
    const needleIndex:number = haystack.findIndex((element:any) => element === "needle")
    return `found the needle at position ${needleIndex}`
}

//11-12-2020 'Stop gninnipS My sdroW!'
export class Kata {
    static spinWords(words: string) {
        const wordsArr:string[] = words.split(' ')
        const spunArr:string[] = wordsArr.map((word:string) => {
            if (word.length > 4) {
            return word.split('').reverse().join('')
            }
            return word
        })
        return spunArr.join(' ')
    }
}

//11-12-2020 'Tribonacci Sequence'
export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    if (n !== 0 && n > 2){
        let currentTrib:number = 0
        let sequenceArr: number[] = [a,b,c]
        for ( let i:number = 2; i <= n-2; i++ ) {
            currentTrib = sequenceArr[i] + sequenceArr[i-1] + sequenceArr[i-2]
            sequenceArr.push(currentTrib)  
        }
        return sequenceArr     
        } else if (n === 1) {
            return [a]
        } else if ( n === 2 ) {
        return [a, b]
        } else {
        return []
        }
}

//11-13-2020 'Fold an Array'
export function foldArray(array:number[], runs:number):number[] {
    let foldedArray:number[] = []
    let newArray:number[] = array.slice()
    while (newArray.length > 1) {
        foldedArray.push(newArray[0] + newArray[newArray.length-1])
        newArray = newArray.slice(1, newArray.length-1)
    }
    if (newArray.length > 0) {
        foldedArray.push(newArray[0])
    } if (runs > 1) {
        return foldArray(foldedArray, runs - 1)
    }
    return foldedArray
}

//11 -17-2020 'sumFibs'
export function sumFibs(num:number):number {
    let start:number = 0;
    let next:number = 1;
    let current:number;
    let sumOdd:number = 0;
    for (let i:number = 0; i <= num; i++){
        current = start + next;
        start = next;
        next = current;
        console.log(current);
        if (current % 2 !== 0 && current <= num){
        sumOdd = current + sumOdd; 
        }
    }
    console.log(sumOdd)
    return sumOdd + 1;
    }

//11-19-2020 '5kyu - Directions Reduction'
export function dirReduc(arr: string[]):string[] {
    let directionStack:string[] = []

    arr.forEach(( element:string ) => {
        if (!directionStack) {
            directionStack.push(element)
        } else if ( 
            (element === 'NORTH' && directionStack[directionStack.length - 1] === 'SOUTH') 
            ||(element === 'SOUTH' && directionStack[directionStack.length - 1] === 'NORTH')
        ) {
            directionStack.pop()
        } else if (
            (element === 'EAST' && directionStack[directionStack.length - 1] === 'WEST') 
            ||(element === 'WEST' && directionStack[directionStack.length - 1] === 'EAST')            
        ){
            directionStack.pop()
        } else {
            directionStack.push(element)
        }
    })
    return directionStack
}

//11-2020 '6kyu - Multples of 3 or 5'
export class Challenge {
    static solution( number:number ):number {
        const divisibleBy3Or5:number[] = []
        if (number <= 3) {
            return 0
        }
        console.log(number)
        for  ( let current = 3; current < number; current++ ) {
            if ( current % 3 === 0 && current % 5 === 0 ) {
                divisibleBy3Or5.push( current )
            } else if ( current % 3 === 0 ) {
                divisibleBy3Or5.push( current )
            } else if ( current % 5 === 0 ) {
                divisibleBy3Or5.push( current )
            } else {
                continue
            }
        }        
        return divisibleBy3Or5.reduce(( acc:number, element:number ) => acc + element)
    }
}

export function humanReadable(seconds:number):string {

}


