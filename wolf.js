var wolfram = require('wolfram-alpha').createClient("4GJ2YK-Q4QLHV8XPV");
 
wolfram.query("india", function (err, result) {
  if (err) throw err;
  x = JSON.stringify(result, null, 2);
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
		}
		console.log(y);
	}
    }
});
