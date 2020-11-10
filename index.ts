//11-10-2020 'Find the smallest integer 
export function findSmallestInt(args: number[]): number {
    return args.sort((a:number, b:number)=> a-b)[0]
}

export function findNeedle(haystack: any[]):string {
    const needleIndex:number = haystack.findIndex((element:any) => element === "needle")
    return `found the needle at position ${needleIndex}`
}