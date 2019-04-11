const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


var bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user');

//config

app.set('port',5000);


app.listen(app.get('port'),(req,res)=>{
    console.log('Server on PORT: ', app.get('port'));
});


//BodyParser
// parse application/json
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:4200'
}));


//routes

app.use('/user',userRoutes);

//middleware
app.use(morgan('dev'));
app.use(express.json());


