var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var emailHelper = require(path.join(__dirname, '/helpers/emailHelper'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

// Paths
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(path.join(__dirname, '/static')));

// views for templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('index', { items: {} });
});

app.post('/emails', function (request, response) {
  var items = emailHelper(request.body.email_string);
  response.render('index', { items: items });
});

app.listen(app.get('port'), function () {
  console.log('server running on', app.get('port'));
});

