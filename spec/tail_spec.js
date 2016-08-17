import {tail} from '../src/tail'

describe('tail', ()=> {
  it('returns the first element in an array', () => {
    expect(tail([1,2,3,4,5])).toEqual([2,3,4,5])
  }),

  it('returns the first element in an array', () => {
    expect(tail([2,3,4,5])).toEqual([3,4,5])
  }),

  it('returns the first element in an array', () => {
    expect(tail([3,4,5,])).toEqual([4,5])
  }),

  it('returns the first element in an array', () => {
    const array4 = [
      {first: 'first'},
      {second: 'second'},
      {third: 'third'},
      {fourth: 'fourth'},
      {fifth: 'fifth'}
    ]
    expect(tail(array4))
    .toEqual([
      {second: 'second'},
      {third: 'third'},
      {fourth: 'fourth'},
      {fifth: 'fifth'}
  ])
  })
})    
