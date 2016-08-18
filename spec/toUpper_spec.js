import { toUpper } from "../dist/toUpper.js"

describe('toUpper', ()=> {
  it('takes a string and converts the letters in upper case', () => {
    expect(toUpper( 'heLLo' )).toEqual('HELLO')
    
  })

  it('returns an empty string for a null input', () => {
    expect(toUpper( null )).toEqual('')
  })

  it('returns an empty string for an undefined input', () => {
    expect(toUpper( undefined )).toEqual('')
  })

})