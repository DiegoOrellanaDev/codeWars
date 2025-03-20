// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort((a,b) => a - b)
    return arr[0] + arr[1]
   }