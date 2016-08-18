const forEach = ( collection, iteratee ) => {
  if (iteratee === null){
    return null
  }

  const fn = iteratee || ( () => {} )

  for ( let key in collection ) {
      fn( collection[ key ], key, collection )
  }

return collection

}

export { forEach }