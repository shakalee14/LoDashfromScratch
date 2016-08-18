const remove = (array, fn) => {
if(array === null || array === undefined){ 
  return undefined
}
let result = []
 for(let index = 0; index < array.length; index++){
    let item = array[index]
    if (fn(item)){
    result.push(item)
    }
  }
  return result
}

export {remove}
