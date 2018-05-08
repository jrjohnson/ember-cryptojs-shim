import { module, test } from 'qunit';
import RIPEMD160 from 'cryptojs/ripemd160';

module('ripemd160 as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(RIPEMD160);
  });

  test('test hash function', function(assert) {
    let hash = RIPEMD160("Test123").toString();
    assert.equal(hash, 'ad04a37969a6d56b50ce9678cfbd5248dd962c53');
  });
});
