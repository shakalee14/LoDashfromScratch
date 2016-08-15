const chunk = (array, size) => {
  if( ! (array instanceof Array ) ) {
    return []
  }

  const arrays = []

  for( let i = 0; i < array.length; i = i + size ) {
    const newArray = []

    for( let j = 0; j < size && i + j < array.length; j++ ) {
      newArray.push( array[ i + j ] ) 
    }

    arrays.push( newArray )
  }

  return arrays
}

export {chunk}