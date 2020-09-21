const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    Password: String
},{
    timestamps:true
});

module.exports = model('User', userSchema);