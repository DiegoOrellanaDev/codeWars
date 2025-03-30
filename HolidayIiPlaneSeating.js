//https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript

function planeSeat(str){
    //separation of number and letter
  let num = +(str.length > 2 ? str[0] + str[1] : str[0]);
  let letter = str[str.length -1].toUpperCase()
  let result = ''
  
   if(num > 60 || letter == 'I' || letter == 'J') return 'No Seat!!'

   //check the position
   if(num < 21) {
      result = 'Front-'
  } else if(num < 41) {
      result = 'Middle-'
  } else {
      result = 'Back-'
  }

  //cheking fot the section
  if(letter < 'D') {
      result += 'Left'
  } else if( letter < 'G') {
      result += 'Middle'
  } else {
      result += 'Right'
  }
  return result
}