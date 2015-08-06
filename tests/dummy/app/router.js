import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gettingStarted');
  this.route('layout');
  this.route('components');
  this.route('forms');
});

export default Router;
