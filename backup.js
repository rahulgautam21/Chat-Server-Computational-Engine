var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var wolfram = require('wolfram-alpha').createClient("4GJ2YK-Q4QLHV8XPV");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
	wolfram.query(msg, function (err, result) {
	k = 0;
	if (err) throw err;
  	x = JSON.stringify(result, null, 2);	
		io.emit('chat message', msg);
	for (var i = 0; i<x.length; i++){
        	if(x[i]=='t'){
			i++;
			if(!(x[i]=='i'||x[i]=='e'))
				continue;	
			y="t"+x[i];
			i++;
			if(!(x[i]=='t'||x[i]=='x'))
				continue;	
			while(x[i]!='\n'){
				if(x[i]!='"'&&x[i]!=',')
					y+=x[i];
				else if(x[i]=='"')
					y+=' ';
				i++;
				k++;		
			}
			console.log(y);
			if(k == 1)
				msg = msg + y;
			else
				msg = y;
			io.emit('chat message', msg );
		}
    	}
	});
    console.log('message: ' + msg);
  });

  socket.on('chat message1', function(msg){
			io.emit('chat message1', msg );
			console.log('message: ' + msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
