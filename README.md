# koa-useragent
[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@tool-developer/koa-useragent.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@tool-developer/koa-useragent


## Install

```bash
$ npm i @tool-developer/koa-useragent --save
```

## Usage

```js
import Koa from 'koa'
import useragent from '@tool-developer/koa-useragent'
//
const app = new Koa()
//
app.use(useragent);
//
```