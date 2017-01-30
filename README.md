# tabs-to-spaces-stream
A little library that converts tabs in streaming data to spaces.

## Instalation
```npm install --save tabs-to-spaces-stream```

## Usage
```js
const fs = require('fs')
const {convertStream} = require('tabs-to-spaces-stream')

const myStream = fs.createReadStream('hello.txt') //contents: hello   world

myStream
    .pipe(convertStream(4))
    .pipe(process.stdout)

// hello    world
```

## API
### convertStream(numberOfSpaces)
```js
/**
 * Returns a transform stream converting tabs to spaces. 
 Buffer streams will be converted to strings by default.
 *
 * @param {number} [numberOfSpaces=2]
 *  The number of spaces to replace each tab with. Default is 2.
 Throws a RangeError if < 0  or > 8
 */

 src.pipe(convertStream()).pipe(dest)
 ```

### convert(str, numberOfSpaces)

 ```js
/**
 * Returns a string converting tabs to spaces
 *
 * @param {string} str
 *  A string on which to operate
 * @param {number} [numberOfSpaces=2]
 *  The number of spaces to replace each tab with. Default is 2.
 */

 const {convert} = require('tabs-to-spaces-stream')
 convert('Hello   world', 6) // 'Hello      world'
 ```

# Contributing
This is a pretty small library but if you find any issues, I'll happily take pull requests.

# License
MIT