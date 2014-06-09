var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function addieren(req, res, next) {
  var a = parseInt(req.params.a);
  var b = parseInt(req.params.b);
  res.send(a + ' + ' + b + ' = ' + (a+b).toString() + ', du Arsch' );
  next();
}


var server = restify.createServer();
server.get('/hello/:name', respond);
server.get('/addieren/:a/:b', addieren);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
