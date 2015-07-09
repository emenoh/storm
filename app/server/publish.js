/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('elements', function (/* args */) {
  return Elements.find();
});

Meteor.publish('pages', function (/* args */) {
  return Pages.find();
});