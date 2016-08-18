const difference = ( input, values ) => {
  let result = []

  if (values === null || values === undefined){
    return input
  }

  for( let index = 0; index < input.length; index++ ) {
    let shouldAdd = true

    for( let value = 0; value < values.length && shouldAdd; value++ ) {
      shouldAdd = shouldAdd && input[ index ] !== values[ value ]
    }

    if( shouldAdd ) {
      result.push( input[ index ] )
    }
  }

  return result
}

export { difference }