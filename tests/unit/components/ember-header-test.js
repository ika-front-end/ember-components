import { test, moduleForComponent } from 'ember-qunit';
//import startApp from '../../helpers/start-app';
//import Ember from 'ember';

//var App;

moduleForComponent('ember-header', 'EmberHeaderComponent', {});

test('is a header tag', function(assert) {
  assert.equal('HEADER', this.$().prop('tagName').toUpperCase());
});

test('userName', function(assert) {
  var header = this.subject();
  header.set('userName', 'wangmeng');
  assert.equal('wangmeng', this.$().find('.user').text().trim());
});

test('appName', function(assert) {
  var header = this.subject();
  header.set('appName', 'ika');
  assert.equal('ika', this.$().find('.app').text().trim());
});
