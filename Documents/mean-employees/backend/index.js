const express = require('express');
const morgan = require('morgan');
const app = express();

//database
const { mongoose } = require('./database');

//Configuration
app.set('port', process.env.PORT || 3000); //Configuration deploy

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); //Para que se entienda JSON

//Routes
app.use('/api/employees',require('./routes/employee'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});