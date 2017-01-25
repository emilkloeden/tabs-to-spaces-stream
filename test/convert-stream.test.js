const fs = require('fs')
const noTabs = require('./test-functions/no-tabs')
const StreamTest = require('streamtest')
const {convert, convertStream} = require('../src/index')
const {expect} = require('chai')

describe('convertStream function', () => {
    it('should respect the numberOfSpaces passed', done => {
        const readStream = fs.createReadStream('./test/tabbed-out-text-file.txt')
        readStream
            .pipe(convertStream(6))
            .pipe(StreamTest['v1'].toText(function(err, text){
                if(err) {
                    expect(err).to.be.an('error')
                    done(err)                   
                } 
                else {
                    expect(text).to.satisfy(noTabs)
                    done()
                }
        }))
    })
    it('should replace all tabs with spaces over a stream', done => {
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
    it('should work with streams2 as well as streams1', done => {
        const readStream = fs.createReadStream('./test/tabbed-out-text-file.txt')
        readStream
            .pipe(convertStream())
            .pipe(StreamTest['v2'].toText(function(err, text){
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