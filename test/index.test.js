const {expect} = require('chai')
const convert = require('../src/index')

describe('tabs-to-spaces-stream', () => {
    describe('tabs-to-spaces', () => {
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