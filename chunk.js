const chunk = (array, size) => {
  const arrays = []

  for( let i = 0; i < array.length; i = i + size )
    const newArray = []

    for( let j = 0; j < size && i + j < array.length; j++ ) 
      newArray.push( array[ i + j ] ) 
    }

    arrays.push( newArray )
  }

  return arrays
}

// array = [ 1, 2, 3, 4, 5 ]
// size = 2

// FIRST ITERATION
// i = 0
// j = 0
// array[ 0 ] // i
// j = 1
// array[ 1 ]

// i = 2
// j = 0
// array[ 2 + 0 ]
// j = 1
// array[ 3 ]

// i = 4
// baby[ 5 ]



export {chunk}