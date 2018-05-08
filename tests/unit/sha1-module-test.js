import { module, test } from 'qunit';
import SHA1 from 'cryptojs/sha1';

module('sha1 as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(SHA1);
  });

  test('test hash function', function(assert) {
    let hash = SHA1("Test123").toString();
    assert.equal(hash, '8308651804facb7b9af8ffc53a33a22d6a1c8ac2');
  });
});
