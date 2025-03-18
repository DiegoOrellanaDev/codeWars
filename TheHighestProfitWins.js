// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
    let sorted = arr.sort((a,b) => a - b)
    return [sorted[0], sorted[sorted.length -1]]
  }