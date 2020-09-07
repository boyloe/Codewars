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
      if(arr[i] !== 0){
        new_arr.push(arr[i])
    } else {
      zero_arr.push(0)
    }   
  }
     new_arr.push(...zero_arr)
     return new_arr
  }  


// 09-03-2020 "6kyu - Are they the 'same'?"  
function comp(array1, array2){
  let status = true
  const sqArr = array1.map(number => number*number).sort()
  const sortArr2 = array2.sort()
  for(let i = 0; i<array1.length;i++){
    if(sqArr[i] == sortArr2[i]){
      status = true
      console.log(sqArr[i],sortArr2[i])
    }else{
      console.log(sqArr[i],sortArr2[i])
      return false
    }    
  } 
  return array1,array2,status  
}

//clever solution to "Are they the same" by omiceron
function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

//09-04-2020 "6kyu - Array.diff"
function arrayDiff(a,b) {
  if (b === undefined || a === undefined) {
    return a;
  }
  
  let diffArr = [];
  let merged = a.concat(b);
  
  merged.forEach(function(number) {
    if (!b.includes(number)) {
      diffArr.push(number);
    }
  })  
  return diffArr;
}

//09-06-2020 "6 kyu-Build a Pile of Cubes"
function findNb(m) {
  let volume = 0
  for(n=1;volume<m;n++){
    volume += n**3
  }
  if(volume == m){
    return n-1
  }else{
  return (-1);
  }  
}



