//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
    //num
    //return sum if positive, else return 0
    let sum = 0
    for(let i = number -1 ; i >= 0; i--) {
      if(i % 3 == 0 && number % 5 == 0) {
        sum += i
      } else if(i % 3 == 0) {
        sum += i
      } else if(i % 5 == 0) {
        sum += i
      }
    }
    return sum
    
  }