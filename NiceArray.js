//NiceArray

function isNice(arr){
    if(arr.length < 1) return false
    let count = 0
    arr.forEach(num => {
        if(arr.includes(num + 1) || arr.includes(num - 1)) count++
        
    })
    
    if(count == arr.length) {
        return true
    } else {
        return false
    }
}