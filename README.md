[npm]: https://img.shields.io/npm/v/rollup-plugin-rollup
[npm-url]: https://www.npmjs.com/package/rollup-plugin-rollup
[size]: https://packagephobia.now.sh/badge?p=rollup-plugin-rollup
[size-url]: https://packagephobia.now.sh/result?p=rollup-plugin-rollup

[![npm][npm]][npm-url]
[![size][size]][size-url]

# rollup-plugin-rollup

🍣 A Rollup plugin which imports a Rollup bundle as a string.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install rollup-plugin-rollup --save-dev
```

## Usage

Assuming a `src/index.js` exists and contains code like the following:

```js
import miner from './miner.rollup';
import { worker } from 'shumei';

worker.dedicated(miner);
```

And a `src/miner.js` exists and contains code like the following:

```js
import { worker } from 'shumei';

const [tx, rx] = worker.channel();

for await (const msg of rx) {
  console.log(msg);
}
```

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import rollup from 'rollup-plugin-rollup';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [rollup()]
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

## Options

No options at the moment.
