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

//08-31-2020 '7kyu - Categorize New Member'
function openOrSenior(data){
    membership = [];
    data.map(prospect => 
            {if(prospect[0] > 54 && prospect[1] > 7) {
                membership.push("Senior");
            }else{
                membership.push("Open");
    }
  })
  return membership
}
let test1 = [[57,12],[54, 12], [59,6]]
console.log(openOrSenior(test1));
