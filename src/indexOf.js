const indexOf = (input, inputValue) => {

  for( let index = 0; index < input.length; index++ ){
    if( inputValue === input[index] ) {
      return index
    } 
  }

  return -1 
}


export { indexOf }
