module.exports = function(str, numberOfSpaces=2) {
    if (numberOfSpaces < 0 || numberOfSpaces > 8) {
        throw new RangeError('`tabs-to-spaces-stream` expects to replace each tab with 0-8 spaces. If the numberOfSpaces argument is not passed, 2 spaces will be used.')
    }
    let space = ''
    for (let i = 0; i < numberOfSpaces; i++) {
        space += ' '
    }
    return str.replace(/\t/g, space)
}