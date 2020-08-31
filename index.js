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

//08-31-2020 '5kyu - Moving Zeroes to the End'
let moveZeros = function (arr) {
    console.log(arr)
    new_arr = []
    zero_arr = []
    for(let i = 0;i<arr.length;i++){
      if(arr[i] != 0){
        new_arr.push(arr[i])
        zero_arr.push(0)
    }
    new_arr.push(...zero_arr)
    return new_arr
  }  
}  