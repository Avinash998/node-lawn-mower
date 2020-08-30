const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dudesum:dudesum998@ds119660.mlab.com:19660/test-db', {useMongoClient: true});
module.exports = {
    mongoose
};