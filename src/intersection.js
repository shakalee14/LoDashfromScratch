const intersection = ( ...inputs ) => {
  let result = inputs[ 0 ]

  for( let index = 1; index < inputs.length; index++ ) {
    result = intersectionOfTwoArrays( result, inputs[ index ] )
  }

  return result
}

const intersectionOfTwoArrays = (first, second) => {
  let keepers = []

  for( let index = 0; index < first.length; index++ ){
    let found = false 

    for ( let jindex = 0; jindex < second.length; jindex++ ){
      found = first[index] === second[jindex] || found
    }
    
    if( found ){
      keepers.push(first[index])
    }
  }

  return keepers
}

export { intersection }