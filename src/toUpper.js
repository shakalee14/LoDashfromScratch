const UPPER_A = 65
const UPPER_Z = 90
const LOWER_A = 97
const LOWER_Z = 122

const toUpper = input => {
  if( input === null || input === undefined ) {
    return ''
  } 

  let newString = ''

  for( let index = 0; index < input.length; index++ ) {
    let code = input.charCodeAt( index )
    let letterCode 

    if( code >= LOWER_A && code <= LOWER_Z ){
      letterCode = ( code - LOWER_A ) + UPPER_A
    } else {
      letterCode = code
    }

    newString += String.fromCharCode( letterCode )
  }

  return newString 
}


export { toUpper }


// onst getLetter = char => {
//   const code = char.charCodeAt(0)
// }
//maybe ascii table

//
  // const alph = {a:'A', b:'B', c:'C', d:'D', e:'E', f:'F', g:'G', h:'H', i:'I', j:'J', k:'K', l:'L', m:'M', n:'N', o:'O', p:'P', q:'Q', r:'R', s:'S', t:'T', u:'U', v:'V', w:'W', x:'X', y:'Y', z:'Z' }

  // for ( let key in alph ) {
  //   if( typeof input === 'string'){
  //     for ( let index = 0; index < input.length; index++ ){
  //       return input[index] 
  //     }
  //     return [alph[key]]
  //   }
  // }
  //   // if( typeof input === 'string'){
  //        return [alph[key]] += input[key] '' //do something
  //                         //charcode ??
  //   }