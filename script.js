//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers.sort((a,b) => a - b)
  return arr[0] + arr[1]
 }


/*
Jaden Casing Strings

We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
     function toJadenCase() {
       
       return this.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(' ')
     }
    }
  );

  /* */
  //Reverse words
function reverseWords(str) {
  return str.split(' ').map(element => element.split('').reverse().join('')).join(' ')
}


let arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3];
let arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0];
let rng = [-4, 4];
let wanted = 'odd';
function findArr(arrA, arrB, rng, wanted) {
  
  let arr = [];
  let arrTwoOrMore =[]
  let arrRanged = []
  let nums = {}
  
  arrA.forEach(n => {
    arrB.forEach(n2 => {
      if(n == n2) arr.push(n)
    })
  })
  arr.forEach(n => {
    let num = n.toString()
     nums[`${num}`] === undefined ?  nums[`${num}`] = 0 : nums[`${num}`] += 1 
  } )
  for( let num in nums) {
    if(nums[num] >= 2) arrTwoOrMore.push(num)
  }
  arrTwoOrMore.forEach((n) => {
    n = +n
    if (n >= rng[0] && n <= rng[1]) arrRanged.push(n)
  })
  
  let finalArray = wanted == 'even' ? arrRanged.filter(n => n % 2 == 0) : arrRanged.filter(n => n % 2 !== 0)
  console.log(finalArray)
  
}

let n = -7
console.log(n, n.toString())
n = n.toString()
console.log (n, +n)