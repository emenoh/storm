/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click .addDiv': function(){
		var newId = 'el_'+Random.id()
		var title = 'new page'
		var x = 10
		var y = 10
		var r = Session.get('currentRoom');
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

Famous.Engine.init(); //note our NAMESPACED function name
 
 var scene = Famous.Engine.createScene();
 var appNode = scene.addChild()
 var headerNode = appNode.addChild()
 var contentNode = appNode.addChild()
 var footerNode = appNode.addChild()



 
 
//ALL THE FOLLOWING CODE IS A DIRECT COPY FROM 
//FAMOUS CODE EXCEPT FUNCTION NAMES
 
	var els = Elements.find({'room': Session.get('currentRoom')}).fetch()
	console.log('els', els)
	_.each(els, function(el, i){
		var div = contentNode.addChild()
		div
		.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(200, 100)
        //.setAlign(0,0,0)
        //.setMountPoint(0,0)
        //.setOrigin(0, 0,0)
        .setPosition((i*210), el.y)

        div.content = new Famous.DOMElement(div, {    
	//note the use of our namespaced function
			id: el._id,
	        content: el._id,
	        classes: ['div']
	    })

	    // Listen for click event 
		div.addUIEvent('click')

		// Add an onReceive method that catches all UI events
		div.onReceive = function(event, payload){
		    if(event==='click'){
		    	console.log('hello', this)
		       this.content.setContent('I\'ve been clicked')
		    }
		}
	})


};

Template.Home.destroyed = function () {
};
