// https://www.codewars.com/kata/5390bac347d09b7da40006f6

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
     function toJadenCase() {
       
       return this.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(' ')
     }
    }
  );