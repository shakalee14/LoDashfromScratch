const map = ( array, operation ) => {
  const fn = operation || ( () => {} )
  let results =[]
  if(typeof operation === 'function'){
    for(let index = 0; index < array.length; index++ ){
      let item = array[index]
      let result = fn(item)
      results.push(result)
    }
  }
  else if (typeof operation === 'string'){
    for(let index = 0; index < array.length; index++ ){
      let item = array[index]
      let result = item[operation]
      results.push(result)
      console.log(operation)
    }
  }
  return results
}
export { map }