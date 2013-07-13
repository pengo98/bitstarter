var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
    var data = fs.readFileSync('index.html', 'utf8');
    var buf = new Buffer(data);

    response.send(buf.toString('ascii'));
    //response.send('blahal');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
