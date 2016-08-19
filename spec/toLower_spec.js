import { toLower } from "../src/toLower.js"

describe('toLower', ()=> {
  it('takes a string and converts the letters in lower case', () => {
    expect(toLower( 'heLLo' )).toEqual('hello')
    
  })

  it('returns an empty string for a null input', () => {
    expect(toLower( null )).toEqual('')
  })

  it('returns an empty string for an undefined input', () => {
    expect(toLower( undefined )).toEqual('')
  })
  
})
