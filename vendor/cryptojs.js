(function() {
  /* globals define, chartist */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }
  generateModule('cryptojs', { 'default': CryptoJS });
  generateModule('cryptojs/md5', { 'default': CryptoJS.MD5 });
  generateModule('cryptojs/sha1', { 'default': CryptoJS.SHA1 });
  generateModule('cryptojs/sha256', { 'default': CryptoJS.SHA256 });
  generateModule('cryptojs/sha512', { 'default': CryptoJS.SHA512 });
  generateModule('cryptojs/sha3', { 'default': CryptoJS.SHA3 });
  generateModule('cryptojs/ripemd160', { 'default': CryptoJS.RIPEMD160 });
})();
