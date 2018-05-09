import { module, test } from 'qunit';
import SHA256 from 'cryptojs/sha256';

module('sha256 as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(SHA256);
  });

  test('test hash function', function(assert) {
    let hash = SHA256("Test123").toString();
    assert.equal(hash, 'd9b5f58f0b38198293971865a14074f59eba3e82595becbe86ae51f1d9f1f65e');
  });
});
