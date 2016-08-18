const zip = (...arrays) => {
  let maxlength = maxLength( arrays )
  let result = []

  for( let index = 0; index < maxlength; index++ ){
    let temp = []

    for( let arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++ ) {
      if( arrays[ arrayIndex ] instanceof Array ) {
        temp.push( arrays[ arrayIndex ][ index ] )
      }
    }

    result.push( temp )
  }

  return result

  // const arrayLengths = []
  // for(let x = 0; x < arrays.length; x++){
  //   let array = arrays[x]
  //   arrayLengths.push(array.length)
  // }
  // let numberOfArrays = Math.max(arrayLengths)
  // console.log(numberOfArrays)
  // for(let y = 0; y < numberOfArrays; y++){
  //   let array = eval('let arrayNo'+y+'= []')
  //   console.log()
  // }
  
}

const maxLength = arrays => {
  let max = arrays[ 0 ].length || 0

  for( let index = 1; index < arrays.length; index++ ) {
    if( max < arrays[ index ].length ) {
      max = arrays[ index ].length
    }
  }

  return max
}

export { zip }