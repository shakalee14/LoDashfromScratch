import { head } from '../src/head'

describe('head', ()=> {
  it('returns the first element in an array', () => {
    const array = [1,2,3,4,5,]
    expect(head(array)).toEqual(1)
  })

  it('returns the first element in an array', () => {
    const array2 = [2,3,4,5,]
    expect(head(array2)).toEqual(2)
  })  

  it('returns the first element in an array', () => {
    const array3 = [3,4,5,]
    expect(head(array3)).toEqual(3)
  })

  it('returns empty array when passed null', () => {
    expect(head(null)).toEqual('this')
  })

  it('returns the first element in an array of objects', () => {
    expect(head([{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'},])).toEqual({first: 'first'})
  })
})
