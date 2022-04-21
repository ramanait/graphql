const mongoose = require('mongoose');

export const productSchema = new mongoose.Schema({
    computers: {
        type: String
    },
    mobiles: {
        type: String
    },
    cameras: {
        type: String
    },
    

    houseHolds: {
        type: String
    },
});
