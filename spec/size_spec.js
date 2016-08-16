import { size } from "../dist/size.js"

describe('size', ()=> {
  it('returns the size of the input object based on keys', () => {
    expect(size({a:1, b:2, c: 3, d: 4})).toEqual(4)
  })

  it('returns the length of the input array', () => {
    expect(size([1,2,3,4,5,6])).toEqual(6)
  })

  it('returns 0 for an empty array', () => {
    expect(size([])).toEqual(0)
  })

  it('returns 0 for a null input', () => {
    expect(size(null)).toEqual(0)
  })

  it('returns 0 for an undefined input', () => {
    expect(size(undefined)).toEqual(0)
  })

})