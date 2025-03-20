// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){
    return x.split('').map(n => +n >= 5 ? 1 : 0).join('')
  
  }