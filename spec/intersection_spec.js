import { intersection } from '../src/intersection'

describe('intersection', ()=> {
  it('returns the intersection of values present in both input arrays', () => {
    expect(intersection([1, 2, 3, 4, 'v'], [2, 3, 5, 'v'])).toEqual([2 , 3, 'v'])
  })

  it('returns an empty array if there are none of the same values present in the input arrays', () => {
    expect(intersection([1,2], [3,4])).toEqual([])
  })  

  it('returns an empty array if at least one input is an object', () => {
    expect(intersection({a:1, b:2}, [1,2])).toEqual([])
  })
})
