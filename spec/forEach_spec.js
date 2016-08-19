import { forEach } from '../src/forEach'

const closure = () => {
  let values = []
  const test = (value, index, array) => 
    values.push( `${value}-${index}-${array[index]}` )

  test.values = values

  return test
}

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

  it('returns the original collection', () => {
    expect(forEach ( [1,2] ) ).toEqual( [1,2] )
   })

  it('invokes iteratee with value, index, and array for array inputs', () => {
    const test = closure()
    forEach ( [1,2], test )

    expect( test.values ).toEqual( [ '1-0-1', '2-1-2' ] )
   })

  it('invokes iteratee with value, key, and object for object inputs', () => {
    const test = closure()
    forEach ( {a:1, b:2}, test )

    expect( test.values ).toEqual( [ '1-a-1', '2-b-2' ] )
   })

})

