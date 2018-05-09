import { module, test } from 'qunit';
import SHA512 from 'cryptojs/sha512';

module('sha512 as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(SHA512);
  });

  test('test hash function', function(assert) {
    let hash = SHA512("Test123").toString();
    assert.equal(hash, 'c12834f1031f6497214f27d4432f26517ad494156cb88d512bdb1dc4b57db2d692a3dfa269a19b0a0a2a0fd7d6a2a885e33c839c93c206da30a187392847ed27');
  });
});
