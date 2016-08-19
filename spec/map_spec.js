import { map } from '../src/map'

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

fdescribe('map', ()=> {
  it('returns the square of values present in all input arrays', () => {
    expect(map([1, 2, 3, 4], n => n * n)).toEqual([1, 4, 9, 16])
  })

  it('returns an empty array if there are none of the same values present in the input arrays', () => {
    expect(map([1,2, 3, 4, 0], n => n * n)).toEqual([1,4, 9, 16, 0])
  })  

  it('returns an empty array if at least one input is an object', () => {
    expect(map([1, 2], o => o * 2)).toEqual([2,4])
  })

  it( 'returns the input if the input is a single array', () => {
    expect(map(users, 'user')).toEqual( [ 'barney', 'fred' ] )
  })

  it('returns an empty array if itaratee is not given ', () => {
    expect(map([1,2, 3, 4, 0])).toEqual([])
  })

  it('returns an empty array if itaratee is null', () => {
    expect(map([1,2, 3, 4, 0], null)).toEqual([])
  })

  it( 'invokes iteratee with value, index, and array when input is array', () => {
    const test = (value, index, array) =>
      `${value}-${index}-${array[index]}`

    expect( map( [1,2,3], test )).toEqual( ['1-0-1', '2-1-2', '3-2-3'] )
  })


  it( 'invokes iteratee with value, key, and object when input is object', () => {
    const test = (value, key, object) =>
      `${value}-${key}-${object[key]}`

    expect( map( { a: 1, b: 2, c: 3 }, test )).toEqual( ['1-a-1', '2-b-2', '3-c-3'] )
  })  
})
