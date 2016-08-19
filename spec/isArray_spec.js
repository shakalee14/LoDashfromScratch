import { isArray } from "../src/isArray.js"

fdescribe('isArray', ()=> {
  it('returns true if the input is an array', () => {
    expect(isArray([1,2,3,4,5, 'v'])).toEqual(true)
  })

  it('returns false if the input is not an array', () => {
    expect(isArray( 'hello' )).toEqual(false)
  })

  it('returns true if the input is an empty array', () => {
    expect(isArray([])).toEqual(true)
  })

})