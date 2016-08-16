import { parseInt } from "../dist/parseInt.js"

describe('parseInt', ()=> {
  it('converts a number in a string to an integer in the specified base', () => {
    expect( parseInt('0101010100', 2) ).toEqual( 340 )
  })

  it('when the base is omitted, used base 10', () => {
    expect(parseInt( '110' )).toEqual( 110 )
  })

  it( 'can handle hexadecimal string with out specified base', () => {
    expect( parseInt( '0x123' ) ).toEqual( 291 )
  })

  it( 'can handle base 34', () => {
    expect( parseInt( '1mn', 34 ) ).toEqual( 1927 )
  })

  it( 'can handle negative numbers', () => {
    expect( parseInt( '-12', 16 ) ).toEqual( -18 )
  })

})