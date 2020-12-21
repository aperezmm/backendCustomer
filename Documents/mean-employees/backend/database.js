//Configuration Database
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB is connected')) //Se conecta a mongodb
    .catch(err => console.error(err));

module.exports = mongoose;