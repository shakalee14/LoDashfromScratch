const pull = function(array, ...values){
  let result = []

  for( let index = 0; index < array.length; index++ ) {
    let shouldAdd = true

    for( let value = 0; value < values.length && shouldAdd; value++ ) {
      shouldAdd = shouldAdd && array[ index ] !== values[ value ]
    }

    if( shouldAdd ) {
      result.push( array[ index ] )
    }
  }

  return result
}

export { pull }