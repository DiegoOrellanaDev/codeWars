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