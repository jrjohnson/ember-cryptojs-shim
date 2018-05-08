import { module, test } from 'qunit';
import CryptoJS from 'cryptojs';

module('cryptojs as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(CryptoJS);
  });

  test('built an sha256 hash from the CryptoJS object', function(assert) {
    let hash = CryptoJS.SHA256("Test123").toString();
    assert.equal(hash, 'd9b5f58f0b38198293971865a14074f59eba3e82595becbe86ae51f1d9f1f65e');
  });
});
