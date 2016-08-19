import { filter } from "../src/filter.js"

const closure = () => {
  let results = []
  const test = (value,indexOrKey,collection) => 
    results.push( `${value}-${indexOrKey}-${collection[indexOrKey]}` )

  test.results = results

  return test
}

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

describe('filter', ()=> {
  it('returns the new array of filtered elements given a function', () => {
    expect(filter(users, function(o) { return !o.active; })).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }])
  })

  it('returns the new array of filtered elements given an object', () => {
    expect(filter(users, { 'age': 36, 'active': true })).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
  })

  it('returns the new array of filtered elements given an array', () => {
    expect(filter(users, ['active', false])).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }])
  })

  it('returns the new array of filtered elements given a string', () => {
    expect(filter(users, 'active')).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
  })

  it('returns undefined when input is null', () => {
    expect(filter(null)).toEqual(undefined)
  })

  it('returns undefined when input is undefined', () => {
    expect(filter(undefined)).toEqual(undefined)
  })

  it('uses the identity function when iteratee is not defined', () => {
    expect( filter( [ true, false, true, false] )).toEqual( [true, true] )
  })

  it('invokes iteratee with value, index, and array when input is an array', () => {
    const testFunction = closure()
    filter( [ 1, 2], testFunction )

    expect( testFunction.results ).toEqual( [ '1-0-1', '2-1-2' ] )
  })

  it('invokes iteratee with value, index, and array when input is an array', () => {
    const testFunction = closure()
    filter( {a:1, b:2}, testFunction )

    expect( testFunction.results ).toEqual( [ '1-a-1', '2-b-2' ] )
  })

})