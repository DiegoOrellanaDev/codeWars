//https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

function arr2bin(arr){
    return arr.reduce((acc, n) => typeof n == 'number' ? acc + n: acc, 0).toString(2)
  
  }