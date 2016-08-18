import { forEach } from '../src/forEach'

describe('forEach', ()=> {
  it('iterates over the collection when the input is an array and a function', () => {
    expect(forEach ( [1,2], console.log()) ).toEqual( [1,2] )
   })

  it('iterates over the collection when the input is an object and a function', () => {
    expect(forEach ( {a:1}, console.log()) ).toEqual( {a:1 } )
   })

  it('iterates over the collection when the input is an object and a function', () => {
    expect(forEach ( {a:1}, console.log()) ).toEqual( {a:1 } )
   })

  it('returns null if you put null as the iteratee', () => {
    expect(forEach ( {a:1}, null ) ).toEqual( null )
   })

  it('returns undefined if you put undefined as the iteratee', () => {
    expect(forEach ( [1,2], undefined ) ).toEqual( [1,2] )
   })

})

