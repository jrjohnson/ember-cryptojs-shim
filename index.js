+/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cryptojs-shim',
  included(app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/crypto-js/crypto-js.js');
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
  },

  treeForVendor(vendorTree) {
    var cryptoJsTree = new Funnel(path.dirname(require.resolve('crypto-js')), {
      files: ['crypto-js.js'],
      destDir: '/crypto-js',
    });

    return new MergeTrees([vendorTree, cryptoJsTree], {
      annotation: 'ember-cryptojs-shim: treeForVendor'
    });
  },
};
