/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('elements', function (/* args */) {
  return Elements.find();
});

Meteor.publish('rooms', function (/* args */) {
  return Rooms.find();
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'currentRoom': 1}});
  } else {
    this.ready();
  }
});