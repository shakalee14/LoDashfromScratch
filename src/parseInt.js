const parseInt = ( inputNum, base=10 ) => {
  let total = 0
  let modifier = 1

  if( inputNum[ 0 ] === '-' ) {
    modifier = -1
    inputNum = inputNum.slice( 1 )
  }

  if( isBase16( inputNum ) ) {
    base = 16
    inputNum = inputNum.slice( 2 )
  }

  for( let index = 0; index < inputNum.length; index++ ) {
    total += getNumber( inputNum[ index ] ) * Math.pow( base, inputNum.length - index - 1 )
  }

  return total * modifier
}

const ZERO = 48
const NINE = 57
const UPPER_A = 65
const UPPER_Z = 90
const LOWER_A = 97
const LOWER_Z = 122

const getNumber = char => {
  const code = char.charCodeAt( 0 )

  if( code >= ZERO && code <= NINE ) {
    return code - ZERO
  } else if( code >= UPPER_A && code <= UPPER_Z ) {
    return code - UPPER_A + 10
  } else if( code >= LOWER_A && code <= LOWER_Z ) {
    return code - LOWER_A + 10
  }
}

const isBase16 = input => {
  return input[ 0 ] === '0' && 
    ( input[ 1 ] === 'x' || input[ 1 ] === 'X' )
}

export { parseInt }