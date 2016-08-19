const concat = ( ...inputs) => {
  let result = []

  for ( let index = 0; index < inputs.length; index++ ){
    if( inputs[index] instanceof Array ) {
      for( let jindex = 0; jindex < inputs[index].length; jindex++ ) {
        result.push( inputs[index][jindex] )
      }
    } else {
      result.push( inputs[index] )
    }
  }

  return result
}

export { concat }


