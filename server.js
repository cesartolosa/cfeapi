var http          = require('http'),
  express         = require('express'),
  bodyParser      = require('body-parser'),
  cookieParser    = require('cookie-parser'),
  methodOverride  = require('method-override'),
  app             = express(),
  server          = http.createServer(app),
  mongoose        = require('mongoose'),
  PORT            = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());
require('./routes')(app);

mongoose.connect('mongodb://127.0.0.1/cfeapi', function (err, res) {
	if (err){
    console.log("Error al conectarse a la base de datos: " + err);
  }	else {
    console.log("Conexión con la base de datos exitosa!");
  }
});

server.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Servidor NodeJS: http://localhost:"+PORT+'/');
  }
});
