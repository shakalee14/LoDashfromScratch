import { head } from '../src/head'

describe('head', ()=> {
  it('returns the first element in an array', () => {
    expect(head([1,2,3,4,5])).toEqual(1)
  })

  it('returns the first element in an array', () => {
    expect(head([2,3,4,5])).toEqual(2)
  })  

  it('returns the first element in an array', () => {
    expect(head([3,4,5])).toEqual(3)
  })

  it('returns empty array when passed null', () => {
    expect(head(null)).toEqual([])
  })
  let array = []
  it('returns empty array when passed an empty array', () => {
    expect(head(array)).toEqual(undefined)
  })

  it('returns the first element in an array of objects', () => {
    expect(head([{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'}])).toEqual({first: 'first'})
  })
})
