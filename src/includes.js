const includes = ( collection, value, jindex= 0 ) => {
  if( typeof collection === 'string' ) {
    return stringIncludes( collection, value, jindex )
  } else {
    return collectionIncludes( collection, value, jindex )
  }
}

const stringIncludes = (string, value, offset) => {
 
  for( let index = offset; index < string.length; index++ ) {
    let found = true

    for( let subIndex = 0; subIndex < value.length && found; subIndex++ ) {
      found = found && string[ index + subIndex ] === value[ subIndex ]
    }

    if( found ) {
      return true
    }
  }

  return false
}

const collectionIncludes = (collection, value, index) => {
  let counter = 0

  for( let key in collection ) {
    if( counter < index ) {
      counter++
    } else if( counter >= index && collection[ key ] === value ){
      return true
    }
  }

  return false
}

export { includes }

  // string: 'abcd'
  // value: 'bc'
  // offset: 0

  // index: 0
  // found: true

  // subIndex: 0
  // found = true && string[ index + subIndex ] === value[ subIndex ]
  // found = true && string[ 0 ] === value[ 0 ]
  // found = true && 'a' === 'b' = false

  // index: 1
  // found: true

  // subIndex: 0
  // found = true && string[ 1 ] === value[ 0 ]
  // found = true && 'b' === 'b'= true
  // subIndex: 1
  // found = true && string[ index + subIndex ] === value[ subIndex ]
  // found = true && string[ 2 ] === value[ 1 ]
  // found = true && 'c' === 'c' = true