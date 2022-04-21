const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { friendSchema } = require('./schema/friendSchema.js');
const { seriesSchema } = require('./schema/seriesSchema.js');
const { userSchema } = require('./schema/userSchema.js');
const { productSchema } = require('./schema/productSchema.js');
const { foodSchema } = require('./schema/foodSchema.js');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Friends = mongoose.model('Friends', friendSchema);
const Food = mongoose.model('Food', foodSchema);
const Series = mongoose.model('Series', seriesSchema);
const users = mongoose.model('users', userSchema);
const products = mongoose.model('products', productSchema);




export { Friends, Series, users, products, Food };