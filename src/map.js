// const map1 = ( array, operation ) => {
//   const fn = operation || ( () => {} )
//   let results =[]
//   if(typeof operation === 'function'){
//     for(let index = 0; index < array.length; index++ ){
//       let item = array[index]
//       let result = fn(item)
//       results.push(fn( array[ index ] ))
//     }
//   }
//   else if (typeof operation === 'string'){
//     for(let index = 0; index < array.length; index++ ){
//       let item = array[index]
//       let result = item[operation]
//       results.push(fn( array[ index ] ))
//     }
//   }
//   return results
// }


const map = ( array, operation ) => {
  if(operation === null || operation === undefined ){ 
  return []
  }else{
    const fn = operation  || ( a => a )
    let results =[]
    for(let index in array ){
      let item = array[index]
      let result = typeof( operation ) === 'function' ? fn( item, index, array ) : item[ operation ]
      console.log(result)
      results.push( result )
    }
    return results
  }
}

export { map }
