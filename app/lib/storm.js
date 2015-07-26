/* client side room methods */


if(Meteor.isClient){
    Meteor.storm = {};
    Meteor.storm.changeRoom = function(newRoomId){
        var prevRoom = Session.get('currentRoom')
        Session.update('currentRoom', newRoomId)
        Session.update('prevRoom', prevRoom)
    }

    Accounts.onLogin(function(){
        var user = Meteor.user()
        var currentRoom = user.profile.currentRoom
        console.log('user room', currentRoom)
        if(!Session.get('currentRoom')){
            Session.setPersistent('currentRoom', currentRoom)
        }else{
            Session.update('currentRoom', currentRoom)
        }
    
    })//end onLogin
}//end isClient

if(Meteor.isServer){

Accounts.onCreateUser(function(options, user) {
  var newRoomId = Rooms.insert({'title': 'default room', 'owner': user._id })
  console.log('newRoomId',newRoomId)
  // We still want the default hook's 'profile' behavior.
  if (options.profile){
    user.profile = options.profile;
  }else{
    user.profile = {}
  }
    user.profile.currentRoom = newRoomId;

  return user;
});//end onCreateUser

}//end isServer


Meteor.startup(function () {
    


});