/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cryptojs-shim',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/crypto-js/crypto-js.js');
    app.import('vendor/cryptojs.js', {
      exports: {
        CryptoJS: ['default']
      }
    });
  }
};
