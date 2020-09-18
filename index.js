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

//09-07-2020 "6 kyu-Build a Pile of Cubes"
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

//09-08-2020 "5 kyu-Rot13"
function rot13(message){
  const alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alpha.split("")
  const messageArr = message.split("")
  const encodedMessageArr = []
  for(i=0;i<messageArr.length;i++){
    if(alphaArr.includes(messageArr[i])){
      alphaIndex = alphaArr.findIndex(letter => letter == messageArr[i])
      let encodedLetter = alphaArr[alphaIndex + 13]
      encodedMessageArr.push(encodedLetter)
    }else{
      encodedMessageArr.push(messageArr[i])
    }
  }
  return encodedMessageArr.join("")
}

//Clever solution to "5 kyu Rot13" by Paul Calvelage
function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}

////09-08-2020 "6 kyu-Buying a Car"
// function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth){
//   if(startPriceOld >= startPriceNew){
//     return [0, startPriceOld - startPriceNew]
//   }else{
//     let priceO = startPriceOld
//     let priceN = startPriceNew
//     let availableCapital = startPriceOld
//     for(i=0;availableCapital<priceN;i++){
//       depreciationOld = priceO * (percentLossByMonth/100)
//       console.log({depreciationOld})
//       priceO -= depreciationOld
//       console.log({priceO})
//       console.log({priceN})
//       depreciationNew = priceN * (percentLossByMonth/100)
//       console.log({depreciationNew})
//       availableCapital += (savingPerMonth -depreciationOld)
//       priceN -= depreciationNew
      
//       console.log({availableCapital})
//     }
//     return [i, availableCapital - priceN]
//   }
// }

// console.log(nbMonths(2000,8000,1000,1.5))

//09/14/2020 6kyu-Array Helpers
Array.prototype.cube = function () {return this.map(n =>  n*n*n)}
function sumArray(sum, value){
  return sum + value
}
Array.prototype.average = function () {return this.reduce(sumArray,0)/this.length}
Array.prototype.sum = function () {return this.reduce(sumArray,0)}
Array.prototype.even = function () {return this.filter(n =>  n % 2 === 0)}
Array.prototype.odd = function () {return this.filter(n =>  n % 2 !== 0)}

//09/18/2020 6kyu-Give Me a Diamond
function diamond(size){
  
}