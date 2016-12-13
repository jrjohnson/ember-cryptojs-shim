/*eslint-env node*/
module.exports = {
  normalizeEntityName: function() {
    // allows to run ember -g ember-chartist-shim and not blow up
    // because ember cli normally expects the format
    // ember generate <entityName> <blueprint>
  },

  afterInstall: function() {
    return this.addPackageToProject('crypto-js', '^3.1.0');
  }
};
