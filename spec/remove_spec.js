import { remove } from "../src/remove.js"

describe('remove', ()=> {
  it('Returns the new array of removed elements.', () => {
    expect(remove([1, 2, 3, 4], function(n){return n % 2 == 0;})).toEqual([ 2, 4 ])
  })

  it('Returns the new array of removed elements.', () => {
    expect(remove( [-1, 1, 2, 3, 4], function(n){return n >= 0})).toEqual([ 1, 2, 3, 4])
  })

  it('Returns the new array of removed elements.', () => {
    expect(remove( [1, 2, 3, 4], function(n){return n > 2})).toEqual([ 3, 4 ])
  })

  it('Returns the new array of removed elements.', () => {
    expect(remove( [1, 2, 3, 4, 6, 7], function(n){return n < 5})).toEqual([ 1, 2, 3, 4 ])
  })

  it('Returns the new array of removed elements.', () => {
    expect(remove(null)).toEqual(undefined)
  })

  it('Returns the new array of removed elements.', () => {
    expect(remove(undefined)).toEqual(undefined)
  })

})