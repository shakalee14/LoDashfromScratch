import { pull  } from "../src/pull.js"

const array = ['a', 'b', 'c', 'a', 'b', 'c']

describe('pull', ()=> {
  it('should remove the a\'s and c\'s from the array [a, b, c, a, b, c]', () => {
    expect(pull(array, 'a','c')).toEqual(['b','b'])
  })

  it('should remove all b\'s from array [a, b, c, a, b, c]', () => {
    expect(pull(array, 'b')).toEqual(['a','c','a','c'])
  })

  it('should remove all c\'s from array [a, b, c, a, b, c]', () => {
    expect(pull(array, 'c')).toEqual(['a','b','a','b'])
  })
})