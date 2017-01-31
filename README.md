# tabs-to-spaces-stream
[![Travis](https://img.shields.io/travis/emilkloeden/tabs-to-spaces-stream.svg)](https://travis-ci.org/emilkloeden/tabs-to-spaces-stream) 
[![Codecov](https://img.shields.io/codecov/c/github/emilkloeden/tabs-to-spaces-stream.svg)](https://codecov.io/gh/emilkloeden/tabs-to-spaces-stream) 
[![npm](https://img.shields.io/npm/dt/tabs-to-spaces-stream.svg)](https://www.npmjs.com/package/tabs-to-spaces-stream) 
[![npm](https://img.shields.io/npm/v/tabs-to-spaces-stream.svg)](https://www.npmjs.com/package/tabs-to-spaces-stream) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A little library that converts tabs in streaming data to spaces.

## Installation
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