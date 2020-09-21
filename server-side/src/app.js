//app.js es el encargado de definir el servidor 
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
//settings

app.set('port', process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use('/api/users', require('./routes/users'));

module.exports = app;