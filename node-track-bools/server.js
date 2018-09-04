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
    
  } else if (method === 'GET') {
  
    // Don't forget to serve the index.html

    if (pathname === '/') {
      //your code is here 
     
    } else {
     // your code is here
      
    }
  } else {
    //your code is here 
    
  }
 
}).listen(8000, '0.0.0.0');