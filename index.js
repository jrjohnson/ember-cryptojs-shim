/*eslint-env node*/
'use strict';

var path = require('path');
var resolve = require('resolve');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cryptojs-shim',
  included: function included() {
    this._super.included.apply(this, arguments);

    var importContext;
    if (this.import) {
      // support for ember-cli >= 2.7
      importContext = this;
    } else {
      // addon support for ember-cli < 2.7
      importContext = this._findHostForLegacyEmberCLI();
    }

    importContext.import('vendor/crypto-js/crypto-js.js');
    importContext.import('vendor/cryptojs.js', {
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

  treeForVendor: function(tree) {
    var cryptojsPath = path.dirname(resolve.sync('crypto-js'));
    var cryptoJsTree = new Funnel(cryptojsPath, {
      files: ['crypto-js.js'],
      destDir: '/crypto-js',
    });

    var trees = [tree, cryptoJsTree];

    return new MergeTrees(trees, {
      annotation: 'ember-cryptojs-shim: treeForVendor'
    });
  },

  // included from https://git.io/v6F7n
  // not needed for ember-cli > 2.7
  _findHostForLegacyEmberCLI: function() {
    var current = this;
    var app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  }
};
