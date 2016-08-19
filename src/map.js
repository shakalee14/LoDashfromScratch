const map = ( array, operation ) => {
  if(operation === null || operation === undefined ){ 
  return []
  }else{
    const fn = operation  || ( a => a )
    let results =[]
    for(let index in array ){
      let item = array[index]
      let result = typeof( operation ) === 'function' ? fn( item, index, array ) : item[ operation ]
      results.push( result )
    }
    return results
  }
}

export { map }
