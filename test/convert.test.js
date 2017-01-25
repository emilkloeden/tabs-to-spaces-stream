const {expect} = require('chai')
const {convert} = require('../src/index')
const noTabs = require('./test-functions/no-tabs')

describe('convert function', () => {
    it('should coerce non-strings to strings and return a converted string', () => {
        const buffer = Buffer.from('\tone tab\t\ttwo tabs')
        const expectedString = '  one tab    two tabs'
        const actualString = convert(buffer)
        expect(actualString).to.equal(expectedString)
    })
    it('should throw a RangeError if number of spaces requested is less than 0', () => {
        expect(function() {
            // to.throw requires a function
            convert('str', -1)
        }).to.throw(RangeError)
    })
    it('should throw a RangeError if number of spaces requested is greater than 8', () => {
        expect(function() {
            // to.throw requires a function
            convert('str', -1)
        }).to.throw(RangeError)
    })
    it('should truncate non-integer number of spaces to an integer', () => {
        const beforeString = '\thello'
        const afterStringFour = convert(beforeString, 4)
        const afterStringFourPointFive  = convert(beforeString, 4.5)

        expect(afterStringFourPointFive).to.equal(afterStringFour)
    })
    it('should convert tabs to spaces', () => {
        const beforeString = '\thello'
        const afterString = '  hello'
        const convertedString = convert(beforeString)
        
        expect(convertedString).to.equal(afterString)
    })
    it('should remove all tabs from a document', () => {
        const beforeString = '\tWorld\t\t'
        const convertedString = convert(beforeString)
        
        expect(convertedString).to.satisfy(noTabs)
    })
})