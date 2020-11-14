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
return [0]
}