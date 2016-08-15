var head = require("../head.js")

describe('head', ()=> {
  it('returns the first element in an array', () => {
    expect(head([1,2,3,4,5,])).toEqual(1)
    expect(head([2,3,4,5,])).toEqual(2)
    expect(head([3,4,5,])).toEqual(3)
    expect(head([{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'},])).toEqual({first: 'first'})
  })
})