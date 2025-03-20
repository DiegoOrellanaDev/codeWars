// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    let arr = numbers.split(' ').sort((a,b) => +b - +a)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
    }