const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
     
    email: {
        type: String
    },
    mobilenumber: {
        type: Array
    },
});
