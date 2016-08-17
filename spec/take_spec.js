import { take } from "../dist/take.js"

describe('take', ()=> {
  it('returns the first value of the input array when no n is given', () => {
    expect(take([1, 4, 'c'])).toEqual([1])
  })

  it('creates a slice of the input array with n elements taken from the beginning', () => {
    expect(take( [1,'v',3,4,5], 2)).toEqual([1,'v'])
  })

  it('returns an empty array when the n input is null', () => {
    expect(take([1,2,3], null)).toEqual([])
  })

  it('returns an empty array when you input an object', () => {
    expect(take({a:1, b:2, c: 3}, 2)).toEqual([])
  })

   it('returns an empty array when you input a value', () => {
    expect(take(2)).toEqual([])
  })

})