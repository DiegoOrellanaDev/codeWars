// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    let n = pin.length
    if(n !== 4 && n !== 6) return false
    for (let i in pin ) {
      if (pin[i] > '9' || pin[i] < '0' )  return false
      }
    return true
    }
  

    