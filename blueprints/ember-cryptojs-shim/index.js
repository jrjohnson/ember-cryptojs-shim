/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
    // allows to run ember -g ember-chartist-shim and not blow up
    // because ember cli normally expects the format
    // ember generate <entityName> <blueprint>
  },
  afterInstall: function(options) {
    return this.addBowerPackageToProject('crypto-js');
  }
};
