/*** GLOBAL REQUIRES and POOL CONFIG ***/
var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
	database: 'tododb'
};
var pool = new pg.Pool(config);


/*** ROUTES ***/
// Base URL
router.get('/', function(req, res) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('views/index.html'));
});

router.post('/newtask', function(req, res) {
	var newTask = req.body;
	console.log(newTask);

	pool.connect()
		.then(function(db) {
			db.query('INSERT INTO todotbl (txttask) VALUES($1)', [req.body.description])
				.then(function() {
					db.release();
					res.sendStatus(201); // created
				});
		})
		.catch(function(err) {
			db.release();
			res.sendStatus(500); // server error
		});

});

router.get('/todos', function(req, res) {
	console.log(res.sendStatus(200));
});

module.exports = router;
