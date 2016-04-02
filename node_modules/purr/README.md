purr
======================

> Make your application purr. Add audio when functions and properties get called.

##Install

  `npm install purr`

## Purpose

A module that allows you to make sounds when methods get called or error.  Can be used with CLI's or any other modules you are working with.

This module is a scarlet plugin, and uses events on method calls to play sounds.

## Examples

When a objects function is called, make a purr sound
```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;

purr.when(Math,'min').play();

Math.min(1,2,3);
//-> a purring sound will now be played on your speakers
```

When a objects function is called make a sound using the predefined sounds
```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;

purr.when(Math,'min').play('bomb');

Math.min(1,2,3);
//-> a bomb sound will now be played on your speakers
```

When a objects function is called call some sound file on your computer
```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;

purr.when(Math,'min').play('/home/user/myCustomSoundFile.wav');

Math.min(1,2,3);
//-> a sound will now be played on your speakers
```

When a function instance is called make a purr sound
```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;

function FunctionObject(){
	this.anyFunction = function(){};
	this.anyFunction2 = function(){};
};
var instance = FunctionObject();
purr.when(instance).play();

instance.anyFunction();
//-> a purring sound will now be played on your speakers

instance.anyFunction2();
//-> a purring sound will now be played on your speakers
```

When a function instance errors make a sound
```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;

function FunctionObject(){
	this.anyFunction = function(){throw new Error("some error")};
};
var instance = FunctionObject();
purr.whenError(instance).play('bomb');

instance.anyFunction();
//-> a bomb sound will now be played on your speakers
//-> because the method threw an error
```

When a function is called make a purr sound
```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;

function anyFunction(){};
anyFunction = purr.when(anyFunction).play();

anyFunction();
//-> a purring sound will now be played on your speakers
```

## Api

### Available Sounds

*purr* provides a couple of sounds, but can be easily set to use any sound given a path

Sounds:
* moo
* purr 
* beep
* bomb
* donkey

## Getting Started with this plugin
This plugin requires Scarlet `~0.5.11`

If you haven't used [Scarlet](https://github.com/scarletjs/scarlet) before, be sure to check out the [Documentation](https://github.com/scarletjs/scarlet).  To use this plugin perform the following:

Install scarlet
```shell
npm install scarlet --save
```

Install plugin
```shell
npm install purr --save
```

Once the plugin has been installed, you can use it in your application as follows:

```js
//load scarlet
var Scarlet = require('scarlet');

//Initialize scarlet with the plugin
var scarlet = new Scarlet('purr');
var purr = scarlet.plugins.purr;
```
