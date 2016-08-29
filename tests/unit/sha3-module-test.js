import { module, test } from 'qunit';
import SHA3 from 'cryptojs/sha3';

module('sha3 as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(SHA3);
});

test('test hash function', function(assert) {
  let hash = SHA3("Test123").toString();
  assert.equal(hash, 'ff89327c9f6ad7dcc0479290e5ee0606e10d77abac5abf013729f861d4905bb1523db21fe32b9249fa668aa7bcf17a0fa6c326ad355c26cb04107f30b3f59022');
});
