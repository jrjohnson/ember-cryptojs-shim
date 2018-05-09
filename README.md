ember-cryptojs-shim
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/jrjohnson/ember-cryptojs-shim.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jrjohnson/ember-cryptojs-shim.svg?branch=master)](https://travis-ci.org/jrjohnson/ember-cryptojs-shim)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cryptojs-shim.svg)](https://emberobserver.com/addons/ember-cryptojs-shim)


A shim for using [CryptoJS](https://github.com/brix/crypto-js) in your ember apps.

Installation
------------------------------------------------------------------------------

```
ember install ember-cryptojs-shim
```

Usage
------------------------------------------------------------------------------

Import and use CryptoJS as an ES6 module:

```javascript
import Ember from 'ember';
import CryptoJS from 'cryptojs';

export default Ember.Component.extend({
  hash: null,
  actions: {
    updateHash(){
      const now = Date.now();
      const randomValue = Math.random().toString(36).substr(2);
      const hash = CryptoJS.SHA256(randomValue + now).toString();

      this.set('hash', hash);
    }
  }
});
```

You can also import hash methods directly:
`import SHA256 from 'cryptojs/sha256'`
or
`import SHA3 from 'cryptojs/sha3'`

#### Keywords
This addon provides:
* security
* crypto
* Hash
* MD5
* SHA1
* SHA-1
* SHA256
* SHA-256
* RC4
* Rabbit
* AES
* DES
* PBKDF2
* HMAC
* OFB
* CFB
* CTR
* CBC
* Base64


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests
### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Building
### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
