/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ika-components',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/normalize.css/normalize.css');
    app.import('vendor/styles/header.css');
  }
};
