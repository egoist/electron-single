
# electron-single

[![NPM version](https://img.shields.io/npm/v/electron-single.svg?style=flat)](https://npmjs.com/package/electron-single) [![NPM downloads](https://img.shields.io/npm/dm/electron-single.svg?style=flat)](https://npmjs.com/package/electron-single) [![CircleCI](https://circleci.com/gh/egoist/electron-single/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/electron-single/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

Instead of allowing multiple instances of your app to run, this will ensure that only a single instance of your app is running, and other instances signal this instance and exit.

## Install

```bash
yarn add electron-single
```

## Usage

```js
const makeSingle = require('electron-single')

makeSingle(mainWindow)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**electron-single** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/electron-single/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
