const concat = ( ...inputs ) => {
  let result = []

  for ( let index = 0; index < inputs.length; index++ ){
    result.push( inputs[index] )
  }
  return result

}

export {concat}


// if(input instanceof Array){
//   for (let jindex = 0; jindex < inp)
// }
