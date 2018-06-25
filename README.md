DEPRECATED: ember-cryptojs-shim
==============================================================================

This addon has been deprecated, it is now possible (and frankly better)
to use [ember-auto-import](https://www.npmjs.com/package/ember-auto-import)
to import and use [CryptoJS](https://github.com/brix/crypto-js).

Upgrading
------------------------------------------------------------------------------

```bash
yarn remove ember-cryptojs-shim
yarn add --dev crypto-js
ember install ember-auto-import
```

That's it! All of your existing imports (and many more) should continue to work.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
