var express = require('express'),
    app     = express(),
    port    = 3000,
    // server  = require('promised-sockets')(app);
    io      = require('./socket.js');

    var server = io.init(app);

var nsp = io.of('/api');

nsp.on('connection', function(socket) {
    console.log('Connected!');
});

server.listen(port, function() {
    console.log('Server Listening on port', port);
});