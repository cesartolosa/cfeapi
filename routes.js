module.exports = function(app) {
	app.get('/', function(req, res) { res.send({status: "ON", name: "RESTful API"}) });

	var failures = require('./controllers/failures.js');
	app.post('/addFailure', failures.addFailure);
	app.get('/getFailures', failures.getFailures);

	var reports = require('./controllers/reports.js');
	app.post('/sendReport', reports.sendReport);
	app.get('/getReports', reports.getReports);
};
