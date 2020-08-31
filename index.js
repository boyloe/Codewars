//08-31-2020 '5kyu - Product of consecutive Fib Number'

function productFib(prod){
    let n = 0;
    let nNext = 1;  
    while(n*nNext < prod) {
        nNext = n + nNext;
        n = nNext - n;
    }
    return [n, nNext, n*nNext==prod];
}