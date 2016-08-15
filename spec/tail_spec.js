var tail = require("../tail.js")

describe('tail', ()=> {
  it('returns the first element in an array', () => {
    expect(tail([1,2,3,4,5])).toEqual([2,3,4,5])
    expect(tail([2,3,4,5,])).toEqual([3,4,5])
    expect(tail([3,4,5,])).toEqual([4,5])
    expect(tail([{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'},])).toEqual([{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'}])
  })
})