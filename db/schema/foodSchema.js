"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodSchema = void 0;
const mongoose = require('mongoose');
exports.foodSchema = new mongoose.Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    price: Number,

    qty: {
        type: Number,
        default: 0
    },  

    category: {
        type: [String]
    },
    fav: [String],

    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
    },
    mealtype: {
        type: String,
        enum: ['veg', 'nonVeg'],
        default: 'veg'
    },
});
