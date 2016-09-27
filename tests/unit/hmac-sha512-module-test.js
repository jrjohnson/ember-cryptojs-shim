import { module, test } from 'qunit';
import Hmacsha512 from 'cryptojs/hmac-sha512';

module('Hmac-sha512 as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(Hmacsha512);
});

test('test hash function', function(assert) {
  let hash = new Hmacsha512("Test123", "secret");
  assert.equal(hash, '64fd85dfbf253bbe0b056f8616005482d998fb6fb182fa68bd7890a4b5f58e78d144d4ecc8ad4deceaf1339ff854e86ec7cfffb0d64539e8cb9118053a2f748e');
});
