const reverse = input => {
	if ( input instanceof Array ){ 
		let newInput = []

		for( let index = input.length-1; index >= 0; index-- ) {
			newInput.push(input[index])
		}
		return newInput
	  
	 } else {
	 	return input 
	 }
		
	}
  


export { reverse }

// array !typeof Array ? array : 
//anything that is not array, return what it is
// if array !ty



// peof Array 