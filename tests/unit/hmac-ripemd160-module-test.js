import { module, test } from 'qunit';
import HmacRIPEMD160 from 'cryptojs/hmac-ripemd160';

module('Hmac-ripemd160 as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(HmacRIPEMD160);
});

test('test hash function', function(assert) {
  let hash = new HmacRIPEMD160("Test123", "secret");
  assert.equal(hash, 'adcf57f5a985d01d28d1a6014b1093d1cca0d04e');
});
