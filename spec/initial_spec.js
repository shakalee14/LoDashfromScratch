import { initial } from "../dist/initial.js"

describe('initial', ()=> {
  it('returns the all but the last value in an array', () => {
    expect(initial([1,2,3,4])).toEqual([1,2,3])
  })

  it('returns an empty array if you put in values', () => {
    expect(initial(2)).toEqual([])
  })

  it('returns an empty array when the input is null', () => {
    expect(initial(null)).toEqual([])
  })

  it('returns an empty array when the input is an object', () => {
    expect(initial( {a: 1, b:2 }) ).toEqual([])
  })

  it('returns an empty array when the input array has one value', () => {
    expect(initial([2])).toEqual([])
  })

})