import { nth }  from '../src/nth.js'

const array = ['a', 'b', 'c', 'd']

describe('nth', ()=> {
  it('gets nth item in array', () => {
    expect(nth(array,1)).toEqual('a')
  })

  it('gets nth item in array', () => {
    expect(nth(array,2)).toEqual('b')
  })

  it('gets nth item in array', () => {
    expect(nth(array,0)).toEqual(undefined)
  })

  it('gets nth item in array', () => {
    expect(nth(array,-2)).toEqual('c')
  })

})