const take = ( input, n=1 ) => {

  if ( !(input instanceof Array) || n === null ) {
    return []
  }

  const result = []

  for ( let index = 0; index < n; index++ ){
    result.push( input[index] )
  }

  return result
}

export { take }