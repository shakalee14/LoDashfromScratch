const intersection = ( input1, input2 ) => {
  const result = []
  
  while ( input1.length > 0 && input2.length > 0){
    if ( input1[0] < input2[0]){
      input1.shift();
    } else if( input1[0] > input2[0]){
      input2.shift();
    } else {
      result.push(input1.shift());
      input2.shift()
    }
  }

return result

}

export { intersection }
