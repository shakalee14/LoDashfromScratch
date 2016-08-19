import { zip } from '../src/zip'

describe('zip', ()=> {
  it('sorts arrays into new arrays based on their index in their original arrays', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]])
  }),

  it('sorts arrays based on index in original, inputs undefined if index doesnt exist', () => {
    expect(zip([2,3,4],[4,5])).toEqual([[2,4],[3,5], [4,undefined]])
  }),

  it('sorts arrays based on index in original - just one array given', () => {
    expect(zip([3,4,5,])).toEqual([[3],[4],[5]])
  }),

  it('if given object returns undefined', () => {
    expect(zip({a:1, b:2}, [1,2])).toEqual([[1],[2]])
  })
})    
