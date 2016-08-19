const UPPER_A = 65
const UPPER_Z = 90
const LOWER_A = 97
const LOWER_Z = 122

const toLower = input => {
  if( input === null || input === undefined ) {
    return ''
  } 

  let newString = ''

  for( let index = 0; index < input.length; index++ ) {
    let code = input.charCodeAt( index )
    let letterCode 

    if( code >= UPPER_A && code <= UPPER_Z ){
      letterCode = ( code - UPPER_A ) + LOWER_A
    } else {
      letterCode = code
    }

    newString += String.fromCharCode( letterCode )
  }

  return newString 
}


export { toLower }
