HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

 waitOn: function() {
    var subscriptions = [Meteor.subscribe('pages'), Meteor.subscribe('elements')];

    return subscriptions;
  },

  action: function() {
    this.render('Home');
  }
});


