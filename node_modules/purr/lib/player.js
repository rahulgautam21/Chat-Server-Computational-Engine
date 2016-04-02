var spawn = require('child_process').spawn;
  
var play = module.exports = exports = function(soundPath, callback) {
  var playerList = ['afplay','play'];

  if (playerList.length === 0){
    if(callback)
      callback(new Error("No valid player could be found"));

    return;
  }

  var command = [soundPath];
  var player = playerList[0];
  var child = spawn(player, command);

  child.stderr.setEncoding('ascii');
  child.on('exit', function (code, signal) {

    if(code === null || signal !== null || code === 1 || code === 2){
      if(callback)
        callback(new Error("Error playing file. process returned code:"+code+" signal:"+signal));
      return;
    }

    if(code === 127){
      playerList.shift();
      play(soundPath, callback);
      return;
    }

    if(callback)
      callback(null,true);
  });

};