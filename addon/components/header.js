import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  /**
   * 用户
   * @type {String}
   */
  userName: '',

  /**
   * app名称
   * @type {String}
   */
  appName: ''
});
