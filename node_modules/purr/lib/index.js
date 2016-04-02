var fs = require("fs");
var path = require("path");
var assert = require("assert");
var play = require("./player");

var purr = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.purr = self;
		return self;
	};
	
	var getSoundPath = function(soundArgument){
		if(!soundArgument)
			soundArgument = "purr";
		
		if(fs.existsSync(soundArgument))
			return soundArgument;
		
		var soundPath = path.normalize(__dirname+'/sounds/wav/'+soundArgument+'.wav');
		if(fs.existsSync(soundPath))
			return soundPath;

		throw new Error("Can't find sound path:"+soundPath);
	};

	self.when = function(typeOrInstance, memberName, interceptionEvent){
		if(!interceptionEvent)
			interceptionEvent = "before";

		var interceptor = scarlet.intercept(typeOrInstance,memberName);
		return {
			play : function(soundName,onPlayed){
				var soundPath = getSoundPath(soundName);

				interceptor.on(interceptionEvent,function(){
					play(soundPath,onPlayed);
				});

				return interceptor.proxy();
			}
		};
	};

	self.whenError = function(typeOrInstance, memberName){
		return when(typeOrInstance,memberName,"error");
	};
	

};