var add = require("../addition.js")

describe('add', ()=> {
  it('adds two numbers together', () => {
    expect(add(3,4)).toEqual(7)
  })
})