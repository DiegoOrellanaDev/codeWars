// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    return +((''+ num).split('').map(num => num * num).join(''))
  }