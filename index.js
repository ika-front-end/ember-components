/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ika-components',

  included: function(app) {
    this._super.included(app);

    //app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
    app.import('vendor/styles/header.css');
  }
};
