import { toString } from '../dist/toString.js'

describe('toString', () => {
	it('converts an input to a string', () => {
		expect(toString([1,2,3])).toEqual('1,2,3')
	})

	it('returns an empty string for a null input', () => {
		expect(toString(null)).toEqual('')
	})

	it('returns an empty string for a undefined input', () => {
		expect(toString(undefined)).toEqual('')
	})

	it('returns a string for an input number', () => {
		expect(toString(17302)).toEqual('17302')
	})

	it('returns only the first number in a series of numbers', () => {
		expect(toString(1830,2,3)).toEqual('1830')
	})

})