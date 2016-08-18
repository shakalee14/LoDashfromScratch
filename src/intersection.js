const intersection = ( input1, input2 ) => {
if ( !(input1 instanceof Array ) || input2 instanceof Array ) {
    return []
    } else {

    let result = []

    for(index = 0; index < input1.length; index++) {
      for(value = 0; value < input2.length; value++){
        if(input1[index] === input2[value]) {
          return input1[index] === input2[value]
        }
      }
    }

  return result
  }
}

export { intersection }