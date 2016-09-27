import { module, test } from 'qunit';
import HmacMD5 from 'cryptojs/hmac-md5';

module('Hmac-md5 as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(HmacMD5);
});

test('test hash function', function(assert) {
  let hash = new HmacMD5("Test123", "secret");
  assert.equal(hash, '49fcf52968af8b9c90a81fc7a2bd8be9');
});
