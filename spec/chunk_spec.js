var chunk = require("../chunk.js")

describe('chunk', ()=> {
  it('returns array of elements in an array when chunk size is 1', () => {
    var chunkThis = [1,2,3,4,5]
    expect(chunk ( chunkThis, 1 ) ).toEqual( [1],[2],[3],[4],[5] )
   })

  it('returns array of elements in an array of specified chunk size', () => {
    var chunkThis2 = [1,2,3,4,5]
    expect(chunk ( chunkThis2, 2 ) ).toEqual( [1,2] , [3,4] , [5] )
  })

  it('returns array of elements in an array of specified chunk size, with remainder', () => {
    var chunkThis3 = [1,2,3,4,5]
    expect(chunk ( chunkThis3, 3 ) ).toEqual( [1,2,3], [4,5] )
  })
    
  it('returns array of elements from an object of specified chunk size if ', () => {
    var chunkThisObj = [{first: 'first'},{second: 'second'},{third: 'third'},{fourth: 'fourth'},{fifth: 'fifth'}]
    expect(chunk(chunkThisObj, 1).toEqual([{first: 'first'}], [{second: 'second'}],[{third: 'third'}],[{fourth: 'fourth'}],[{fifth: 'fifth'}]))
  })
})

