const tail = ( array ) => {
  let result = []
  let index = array.length -1 
  while ( index > 0 ) {
    console.log(index)
    result.push(array[index])
    index--
  }
  return (result.reverse())
}

export { tail }
