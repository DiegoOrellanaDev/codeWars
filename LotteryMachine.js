//https://www.codewars.com/kata/5832db03d5bafb7d96000107/solutions/javascript

function lottery(str){
    let result = ''
     for (let letter of str) {
       if(!isNaN(letter) && !result.includes(letter)) result += letter
     }
    return result ? result : "One more run!"
  }