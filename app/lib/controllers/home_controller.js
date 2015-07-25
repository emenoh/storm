HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

 waitOn: function() {
    var subscriptions = [Meteor.subscribe('rooms'), Meteor.subscribe('elements')];

    return subscriptions;
  },

  action: function() {
    this.render('Home');
  }
});


