/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cryptojs-shim',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/crypto-js/crypto-js.js');
    app.import('vendor/cryptojs.js', {
      exports: {
        CryptoJS: [
          'default',
          'md5',
          'sha1',
          'sha256',
          'sha512',
          'sha3',
          'ripemd160',
          'hmac-mda5',
          'hmac-sha1',
          'hmac-sha256',
          'hmac-sha3',
          'hmac-sha512',
          'hmac-ripemd160'
        ]
      }
    });
  }
};
