import { lte } from "../dist/lte.js"

describe('lte', ()=> {
  it('returns true if the first number is less than the second', () => {
    expect(lte(5,6)).toEqual(true)
  })

  it('returns true if the first number is equal to the second', () => {
    expect(lte(5,5)).toEqual(true)
  })

  it('returns false if any input is a string', () => {
    expect(lte('hello', 5)).toEqual(false)
  })

  it('returns true if the first input is null', () => {
    expect(lte(null, 4)).toEqual(true)
  })

  it('returns false if the first input is undefined', () => {
    expect(lte(undefined, 4)).toEqual(false)
  })

})