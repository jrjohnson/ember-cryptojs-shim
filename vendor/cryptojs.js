(function() {
  /* globals define, CryptoJS */

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

  generateModule('cryptojs/hmac-md5', { 'default': CryptoJS.HmacMD5 });
  generateModule('cryptojs/hmac-sha1', { 'default': CryptoJS.HmacSHA1 });
  generateModule('cryptojs/hmac-sha256', { 'default': CryptoJS.HmacSHA256 });
  generateModule('cryptojs/hmac-sha3', { 'default': CryptoJS.HmacSHA3 });
  generateModule('cryptojs/hmac-sha512', { 'default': CryptoJS.HmacSHA512 });
  generateModule('cryptojs/hmac-ripemd160', { 'default': CryptoJS.HmacRIPEMD160 });

})();
