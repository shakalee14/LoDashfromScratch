import { map } from '../src/map'

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];


describe('intersection', ()=> {
  it('returns the intersection of values present in all input arrays', () => {
    expect(map([1, 2, 3, 4], (n) => {return n * n})).toEqual([1, 4, 9, 16])
  })

  it('returns an empty array if there are none of the same values present in the input arrays', () => {
    expect(map([1,2, 3, 4, 0], (n) => {return n * n})).toEqual([1,4, 9, 16, 0])
  })  

  it('returns an empty array if at least one input is an object', () => {
    expect(map([1, 2], (o) => { return o * 2})).toEqual([2,4])
  })

  it( 'returns the input if the input is a single array', () => {
    expect(map(users, 'user')).toEqual( [ 'barney', 'fred' ] )
  })
})
