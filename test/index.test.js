const fs = require('fs')
const StreamTest = require('streamtest')
const {expect} = require('chai')
const {convert, convertStream} = require('../src/index')


const noTabs = str => (str.indexOf('\t') === -1)

describe('tabs-to-spaces-stream', () => {
    describe('convertStream function', () => {
        it('replace all tabs with spaces over a stream', done => {
            const readStream = fs.createReadStream('./test/tabbed-out-text-file.txt')
            readStream
                .pipe(convertStream(2))
                .pipe(StreamTest['v1'].toText(function(err, text){
                    if(err) {
                        done(err)                   
                    } 
                    else {
                        expect(text).to.satisfy(noTabs)
                        done()
                    }
               }))
            })
    })
    describe('convert function', () => {
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
})