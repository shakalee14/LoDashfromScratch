import { difference } from "../dist/difference.js"

describe('difference', ()=> {
  it('creates a new array with the second input arrays values taken out from the first array', () => {
    expect(difference([5,6,7,8,9, 'v'], [5,8,'v'])).toEqual([6,7,9])
  })

  it('returns the first input array if the second input is null', () => {
    expect(difference( [1,2,3], null)).toEqual([1,2,3])
  })

  it('returns the first input array if the second input is undefined', () => {
    expect(difference( [1,2,3], undefined)).toEqual([1,2,3])
  })
  
})