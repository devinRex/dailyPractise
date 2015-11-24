function addEvent(element, type, fn) {
	if(!fn.$$guid) fn.$$guid = addEvent.guid++;

	if(!element.events) element.events = {};

	var handlers = element.events[type];
	if(!handlers) {
		var handlers = element.events[type] = {};
		if(element["on" + type]) {
			handlers[0] = element["on" + type];
		}
	}
	handlers[fn.$$guid] = fn;
	element["on" + type] = handleEvent;
}
addEvent.guid = 1;

function removeEvent(element, type, fn) {
	if(element.events && element.events[type]) {
		delete element.events[type][fn.$$guid];
	}
}

function handleEvent(event){
	var handlers = event[type];
	for(var i in handlers){
		this.$$handleEvent = handlers[i];
		this.$$handleEvent(event);
	}
}