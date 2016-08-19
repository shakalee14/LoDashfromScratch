import { includes } from "../src/includes.js"

fdescribe('includes', ()=> {
  it('returns true when the input is an array and a value present in the array ', () => {
    expect( includes([1,2,3], 1) ).toEqual(true)
  })

  it('returns true when the input is an array and a value present in the array ', () => {
    expect( includes([1,2,3], 1, 2) ).toEqual(false)
  })

  it('returns false when the input is an array and a value not present in the array', () => {
    expect( includes([1,2,3], 7) ).toEqual(false)
  })

  it('returns true when the input is an object and a value present in the object', () => {
    expect( includes( {'a':1, 'b':2, 'c':3, 'd': 4}, 1) ).toEqual(true)
  })

  it('returns false when the input is an object and a value present in the object before offset', () => {
    expect( includes( {'a':1, 'b':2, 'c':3, 'd': 4}, 1, 4) ).toBe(false)
  })

  it('returns true when the input is a string and another string with the same values', () => {
    expect( includes('abcd','bc')).toEqual(true)
  })

  it( 'returns false when substring not found in input', () => {
    expect( includes( 'abcd', 'be' )).toBe( false )
  })

  it('starts checking if a value is present at any specified point in the colection', () => {
    expect( includes([1,2,3,4], 1, [2]) ).toEqual(false)
  })


})