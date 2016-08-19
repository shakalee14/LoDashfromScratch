const filter = (collection, iteratee) => {
  if( collection === null || collection === undefined ) {
    return undefined
  }

  return filterWithFunction( collection, selectFunction( iteratee ) )
}

const selectFunction = iteratee => {
  let fn = iteratee || ( a => a )

  if( fn instanceof Array ) {
    return arrayTest( fn )
  } else {
    switch( typeof( fn ) ) {
      case 'function': 
        return fn
      case 'string': 
        return stringTest( fn )
      case 'object': 
        return objectTest( fn )
    }
  }

}

const arrayTest = array => (value, key, collection) =>
  collection[ key ][ array[ 0 ]] === array[ 1 ]

const objectTest = objectFilter => (value, key, collection) => {
  let match = true

  for( let key in objectFilter ) {
    match = match && value[ key ] === objectFilter[ key ]
  }

  return match
}

const stringTest = string => (value, key, collection) => value[ string ]

const filterWithFunction = (collection, iteratee) => {
  let result = []

  for( let key in collection ) {
    if( iteratee( collection[ key ], key, collection ) ) {
      result.push( collection[ key ] )
    }
  }

  return result  
}

export { filter }