Template.MasterLayout.helpers({
    mainIOResponse: function(){
        return Session.get('mainIOResponse')
    }

});

Template.MasterLayout.events({
    'submit form': function(e,t){
        e.preventDefault()
        var input = e.target.mainIO.value
        //console.log('main IO input form', input)
        doCommand(input);

    }
    /*
    ,'keyup input': function(e,t){
        //console.log(e)
        var input = e.currentTarget.value
        parseCommand(input)
    }
    */
    
});


/********* CLI tools **********/
//At the moment it's something quick and dirty to demonstrate a few useful tools.
//Later it can be refactored into something more optimal and modular.


var commands = {
    'add' : ['image','file','video']
    , 'edit' : ''

}

function parseCommand(string){
    var string = string.split(' ')
    var input = {}
    input.command = string[0]
    input.args = string.slice(1, string.length)
    //console.log(input.command)
    return input
}

function doCommand(input){
    var input = input
    var command = parseCommand(input).command
    var args = parseCommand(input).args
    console.log('doCommand', command)
    
    switch(command){
        case 'add': commands.add(args)
        break;
        default:
        Session.set('mainIOResponse', 'error, command not found')
        console.log('error, command not found')

    }

}

function commandResponse(response){
    Session.set('mainIOResponse', response)
}

var commands = {

    add: function(args){

        Session.set('mainIOResponse', 'add: '+ args.join(' '))
        console.log('args', args)

    }

}

