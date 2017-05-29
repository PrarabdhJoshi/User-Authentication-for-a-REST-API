var express = require('express');
//var router = express.Router();
//var router = express();
/* GET home page. */
var bodyParser = require('body-parser');

var secureroute = express.Router();
var app = express();

var db = require('../queries');
var jwt = require('jsonwebtoken');
var authcontroller = require('./authcontroller');
process.env.SECRET_KEY = "secretkey";


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/secure-api',secureroute);

app.get('/api/places', db.getAllPlaces);
app.get('/api/places/:id', db.getSinglePlace);

//middleware

secureroute.use(function(req, res, next){
	var token = req.body.token || req.headers['token'];
	if(token){
		jwt.verify(token, process.env.SECRET_KEY, function(err, decode){
			if(err){
				res.status(500).send("Token not valid");
				
			}else{
				next();
			}

		})

	}else{
		res.send("token required for access!");
	}
})

secureroute.post('/places', db.createPlace);


app.put('/api/places/:id', db.updatePlace);

app.get('/api/authenticate', authcontroller.authenticate);

module.exports = app;

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/


