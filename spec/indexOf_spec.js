import { indexOf } from "../dist/indexOf.js"

describe('indexOf', ()=> {
  it('returns the index of the first instance of the value in the array', () => {
    expect( indexOf([1, 4, 5], 4) ).toEqual(1)
  })

  it('returns -1 if no value is given', () => {
    expect( indexOf( ['a','v',3,4,5]) ).toEqual(-1)
  })

  it('returns -1 if the value is not present in the input array', () => {
    expect( indexOf([1,2,3], 5) ).toEqual(-1)
  })

  it('returns -1 for an empty input array', () => {
    expect( indexOf([]) ).toEqual(-1)
  })

})