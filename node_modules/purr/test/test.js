var path = require("path");
var assert = require('assert');
var Scarlet = require('scarlet');

describe('Given using purr as a Scarlet plugin',function(){
	it("Should be able to load plugin through Scarlet",function(){
		var loadedPlugin = true;

		try{ 
			var scarlet = new Scarlet("../lib");
			var purr = scarlet.plugins.purr;

		}catch(exception){
			loadedPlugin = false;
			console.log(exception);
		}
		assert(loadedPlugin,"Plugin wasn't loaded properly and throw an exception");
	});
});

describe('Given using purr',function(){
	this.timeout(10000);
	var scarlet = new Scarlet("../lib");
	var purr = scarlet.plugins.purr;

	var anyFunction = function anyFunction(){};

	it("Should be able to play a defined sound when method is called",function(done){
		anyFunction = purr.when(anyFunction).play('purr',function(error, result){
			assert(error === null);
			done();
		});

		anyFunction();
	});

	it("Should be able to play a sound path when method is called",function(done){
		anyFunction = purr.when(anyFunction).play(path.resolve('./lib/sounds/wav/moo.wav'),function(error, result){
			assert(error === null);
			done();
		});

		anyFunction();
	});

	it("Should throw an error when sound path provided is invalid",function(){
		var didThrowException = false;

		try{
			anyFunction = purr.when(anyFunction).play(path.resolve('invalidSound'));
			anyFunction();
		}catch(exception){
			didThrowException = true;
		}
		
		assert(didThrowException);
	});
});