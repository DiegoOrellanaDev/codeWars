// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0)
    
  }