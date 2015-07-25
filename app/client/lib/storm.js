/* client side room methods */
Meteor.storm = {};

Meteor.storm.getCurrentRoom = function(){
    var room;
        if(!Session.get('currentRoom')){
            room = Rooms.insert({'title': 'new room'})
            Session.set('currentRoom', room)
        }else{
            room = Session.get('currentRoom')
        }
    return room;
}

Meteor.storm.changeRoom = function(newRoomId){
    var prevRoom = Session.get('currentRoom')
    Session.set('currentRoom', newRoomId)
    Session.set('prevRoom', prevRoom)
}



Meteor.startup(function () {

Meteor.storm.getCurrentRoom();

});