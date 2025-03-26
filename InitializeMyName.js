//https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

function initializeNames(name){
    let arrName = name.split(' ')
    if(arrName.length < 3) { 
    return name
    } else {
      let firstName = arrName.shift()
      let lastName = arrName.pop()
      let middleNames = arrName.map(name => `${name[0]}.`)
      return [firstName, middleNames, lastName].flat().join(' ')
    }}