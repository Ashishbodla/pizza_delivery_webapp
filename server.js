require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const multer = require('multer');
const upload = multer({dest : 'images'});

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

// app.get('/', function(req, res)
// {
//   res.sendFile(__dirname + 'list.hbs');
// });

app.listen(7500, () => {
    console.log('Express server started at port : 7500');
});

app.use('/employee', employeeController);
