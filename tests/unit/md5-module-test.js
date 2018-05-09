import { module, test } from 'qunit';
import MD5 from 'cryptojs/md5';

module('md5 as an ES6 module', function() {
  test('it has been imported', function(assert) {
    assert.ok(MD5);
  });

  test('test hash function', function(assert) {
    let hash = MD5("Test123").toString();
    assert.equal(hash, '68eacb97d86f0c4621fa2b0e17cabd8c');
  });
});
