var app = require('./config/express-config')();

var port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log( "Listening on port " + port)
});	