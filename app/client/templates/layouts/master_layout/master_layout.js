Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
    'submit form': function(e,t){
        e.preventDefault()
        var input = e.target.mainIO.value
        //console.log('main IO input form', input)
        doCommand(input);

    }
    
});

function doCommand(command){
    var input = command.split(' ');

    console.log('command', input[0])
    var args = input.slice(1, input.length)
    console.log('args', args)
    /*
    switch(input[0]){
        case 'add': addObject()
    }
    */


}