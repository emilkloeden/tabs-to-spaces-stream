const {Transform} = require('stream')
const {convert} = require('./convert')

/**
 * Returns a transform stream converting tabs to spaces. 
 * Buffer streams will be converted to strings by default.
 *
 * @param {number} [numberOfSpaces=2] The number of spaces 
 * to replace each tab with.
 * @throws {RangeError}
 * @returns {stream}
 */
function convertStream(numberOfSpaces=2) {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.toString('utf8')
            this.push(convert(chunk, numberOfSpaces))
            
            callback()
        }
    })
    return myTransform
}

module.exports = {
    convertStream
}