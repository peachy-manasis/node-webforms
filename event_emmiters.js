var events = require('events');
var event_emitter = new events.EventEmitter();

var event_handler = function()
{
	console.log("somebody borked!");
}

event_emitter.on('bork', event_handler);

event_emitter.emit('bork');