import { toArray } from "../dist/toArray.js"

describe('toArray', ()=> {
  it('takes values of an object and puts them into new array', () => {
    expect(toArray({ 'a': 1, 'b': 2 })).toEqual([ 1, 2 ])
  })

  it('takes a string and puts the individual characters in an array', () => {
    expect(toArray( 'hello' )).toEqual(['h', 'e', 'l', 'l', 'o'])
  })

  it('returns an empty array for a number', () => {
    expect(toArray(1)).toEqual([])
  })

  it('returns an empty array for a null input', () => {
    expect(toArray(null)).toEqual([])
  })

  it('returns an empty array for an undefined input', () => {
    expect(toArray(undefined)).toEqual([])
  })

})