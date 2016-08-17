const nth = function(array, index){
  if(Math.sign(index) === 1){
   return array[index - 1]
  }
  else if(Math.sign(index) === -1){
    let newIndex = (array.length + (index))
    return array[newIndex]

  }
}

export { nth }