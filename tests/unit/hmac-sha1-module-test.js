import { module, test } from 'qunit';
import Hmacsha1 from 'cryptojs/hmac-sha1';

module('Hmac-sha1 as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(Hmacsha1);
  });

  test('test hash function', function(assert) {
    let hash = new Hmacsha1("Test123", "secret");
    assert.equal(hash, 'b128b6ba2d199f368eab53f0e425bf9e73c2ac7b');
  });
});
