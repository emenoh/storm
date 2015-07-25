/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click .addDiv': function(){
		var newId = 'el_'+Random.id()
		var title = 'new page'
		var x = 10
		var y = 10
		var r = Meteor.storm.getCurrentRoom()
		Elements.insert({'room': r, 'title': title, 'type': 'div', 'x': x, 'y': y})

		$('.canvas').append('<div class="div selectable draggable resizable" id="'+newId+'" style="top:'+x+'; left:'+y+';">hello</div>')
	},
	'click .selectable': function(){
		console.log('clicked a selectable div')
	}

});



/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {

	var $canvas = $('.canvas');
	var currentRoom = Meteor.storm.getCurrentRoom();
	var els = Elements.find({'room': currentRoom}).fetch();
	console.log('els: ', els);


};

Template.Home.destroyed = function () {
};
