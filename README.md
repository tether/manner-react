# Manner-React

[![NPM](https://img.shields.io/npm/v/manner-react.svg)](https://www.npmjs.com/package/manner-react)
[![Downloads](https://img.shields.io/npm/dm/manner-react.svg)](http://npm-stat.com/charts.html?package=manner-react)
[![guidelines](https://tether.github.io/contribution-guide/badge-guidelines.svg)](https://github.com/tether/contribution-guide)

Create HTML server that plays well with [Manner](https://github.com/tether/manner) and where pages are built using [React](https://github.com/facebook/react)

## Usage

```js
const http = require('http')
const react = require('manner-react')

/**
 * Create HTML server following the manner spec
 * from a folder called pages at __dirname
 */

const service = react(__dirname)

/**
 * Create HTTP server returning pages
 * built in React.
 */

http.createServer((req, res) => {
  service(req, res).pipe(res)
})
```

This modules uses [nextjs](https://github.com/zeit/next.js) to setup and create a HTML server.

## Installation

```shell
npm install manner-react --save
```

[![NPM](https://nodei.co/npm/manner-react.png)](https://nodei.co/npm/manner-react/)


## Question

For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/tether/contribution-guide/blob/master/community.md" target="_blank">community guidelines</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

The open source community is very important to us. If you want to participate to this repository, please make sure to read our <a href="https://github.com/tether/contribution-guide" target="_blank">guidelines</a> before making any pull request. If you have any related project, please let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2017 Tether Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
