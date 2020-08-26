//databajse.js encargado de establecer la conexión con la DB
require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databestest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
});