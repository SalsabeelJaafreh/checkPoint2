var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var globalObject = {};

http.createServer(function(request, response) {
  var pathname = url.parse(request.url, true).pathname;
  var property = pathname.replace(/^\//, '');
  var method = request.method;
  

  if (method === 'POST' && pathname !== '/') {
    
  } 


  else if (method === 'GET') {
    // Don't forget to serve the index.html
  fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });

    if (pathname === '/') {
      //your code is here 
   if (globalObject[this.id] == 0 ) { 
                console.log("toggle to 1");
                globalObject[this.id] = 1;
            } else {
                globalObject[this.id] = 0;
                console.log("toggle to 0");
            }

     
    } else {
     // your code is here
     //i cant understand what this else should do
      
    }
  }




  else {
    //your code is here 
    //this else for error
    console.log('error')
    
  }
 
}).listen(8000, '0.0.0.0');