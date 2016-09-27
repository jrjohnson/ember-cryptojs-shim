import { module, test } from 'qunit';
import Hmacsha3 from 'cryptojs/hmac-sha3';

module('Hmac-sha3 as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(Hmacsha3);
});

test('test hash function', function(assert) {
  let hash = new Hmacsha3("Test123", "secret");
  assert.equal(hash, 'bb46cbc2bec6645beeb13c326b8f07ee5376f33e84908ef772485606cd77a0a549d6bb6ebaec905d081d52de2527945c4204b9478bba5b9d5576ad83d3a26c60');
});
