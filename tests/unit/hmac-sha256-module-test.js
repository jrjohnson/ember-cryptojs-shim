import { module, test } from 'qunit';
import Hmacsha256 from 'cryptojs/hmac-sha256';

module('Hmac-sha256 as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(Hmacsha256);
});

test('test hash function', function(assert) {
  let hash = new Hmacsha256("Test123", "secret");
  assert.equal(hash, '18fe0b0869bffeb3191dea9b282e891550f9c61a8c86a71138f185b6e333ad28');
});
