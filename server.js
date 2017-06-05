/*** GLOBAL REQUIRES ***/
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');


// Globals
app.use(bodyParser.urlencoded({
	extended: true
}));

// Listen
app.listen(7500, function() {
	console.log('server listening on :7500');
});

/*** USES ***/
app.use(express.static('public'));
app.use('/todo', routes);


app.get('/', function(req, res) {
	res.sendFile(path.resolve('./views/index.html'));
});
