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