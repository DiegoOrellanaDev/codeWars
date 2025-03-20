// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let z = [];
    for(let i = 0; i< n; i++){
       z.length>= 1 ? z.push(z[z.length -1 ] + x) : z.push(x)
      }
  
    return z;
  }