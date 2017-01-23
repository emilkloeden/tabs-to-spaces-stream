const {expect} = require('chai')
const convert = require('../src/index')

describe('tabs-to-spaces-stream', () => {
    describe('tabs-to-spaces', () => {
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
            const noTabs = str => (str.indexOf('\t') === -1)
            
            expect(convertedString).to.satisfy(noTabs)
        })
    })
})