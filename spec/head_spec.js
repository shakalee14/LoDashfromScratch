import { head } from '../src/head'

describe('head', ()=> {
  it('returns the first element in an array', () => {
    var array = [1,2,3,4,5,]
    expect(head(array)).toEqual(1)
    console.log('array: '+array)
  })

  it('returns the first element in an array', () => {
    var array2 = [2,3,4,5,]
    expect(head(array2)).toEqual(2)
    console.log('array2: '+array2)
  })  

  it('returns the first element in an array', () => {
    var array3 = [3,4,5,]
    expect(head(array3)).toEqual(3)
    console.log('array2: '+array3)

  })

  it('returns empty array when passed null', () => {
    expect(head(null)).toEqual('this')
    console.log('null yeilds: '+'this')

  })

  it('returns the first element in an array of objects', () => {
    expect(head([{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'},])).toEqual({first: 'first'})
    console.log('result: '+head([{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'}]))

  })
})
