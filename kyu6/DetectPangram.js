//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
    let alphabet = {}
    string.split(' ').forEach(word => {
      word.split('').forEach(letter => {
        let l = letter.toLowerCase()
        if(/[a-z]/.test(l)) alphabet[l] = 0
       
      })
    })
    console.log(Object.keys(alphabet).length, alphabet)
    if (Object.keys(alphabet).length == 26)  return true
    return false
  }
