//11-10-2020 'Find the smallest integer 
export function findSmallestInt(args: number[]): number {
    return args.sort((a:number, b:number)=> a-b)[0]
}