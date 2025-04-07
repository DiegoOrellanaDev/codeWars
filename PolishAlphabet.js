
//PolishAlphabet
function correctPolishLetters (string) {
    let letters = {
      'ą':'a',
      'ć':'c',
      'ę':'e',
      'ł':'l',
      'ń':'n',
      'ó':'o',
      'ś':'s',
      'ź':'z',
      'ż':'z'
    }
    return string.split('').map(letter => letters[letter] ? letters[letter] : letter ).join('')
  }