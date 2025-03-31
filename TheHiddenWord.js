//https://www.codewars.com/kata/5906a218dfeb0dbb52000005/javascript

function hiddenWord(num) {
    let result = ''
    let keys = {
      "a" : 6,
      "b" : 1,
      "d" : 7,
      "e" : 4,
      "i" : 3,
      "l" : 2,
      "m" : 9,
      "n" : 8,
      "o" : 0,
      "t" : 5
    }

    let numbers = num.toString().split('')
    numbers.forEach(num => {
      for (let key in keys) {
          if(keys[key] == +num) result += key
      }
    })
  return result
  }