const {Transform} = require('stream')
const {convert} = require('./convert')

function convertStream(numberOfSpaces=2) {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.toString('utf8')
    
            this.push(
                 convert(chunk, numberOfSpaces)
                //chunk
                //chunk.toString().replace(/\t/g, '  ')
                )
            callback()
        }
    })
    return myTransform
}

module.exports = {
    convertStream
}