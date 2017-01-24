const {Transform} = require('stream')

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


function convert(str, numberOfSpaces=2) {
    if (typeof str !== 'string') {
        str = str.toString()
    }

    if (numberOfSpaces < 0 || numberOfSpaces > 8) {
        throw new RangeError('`tabs-to-spaces-stream` expects to replace each tab with 0-8 spaces. If the numberOfSpaces argument is not passed, 2 spaces will be used.')
    }
    
    const intSpaces = Math.trunc(numberOfSpaces)
    let spaces = ''

    for (let i = 0; i < intSpaces; i++) {
        spaces += ' '
    }

    return str.replace(/\t/g, spaces)
}

module.exports = {convert, convertStream};