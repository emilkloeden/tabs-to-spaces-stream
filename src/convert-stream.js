const {convert} = require('./convert')
const map = require('streams-map')

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
    return map(convert, numberOfSpaces)
}

module.exports = {
    convertStream
}