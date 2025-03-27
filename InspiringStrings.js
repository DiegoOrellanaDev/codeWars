//https://www.codewars.com/kata/5939ab6eed348a945f0007b2/javascript

function longestWord(str) {
    return str.split(' ').reduce((result, word) => result.length <= word.length ? word : result, '')
  }