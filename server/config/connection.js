const mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/RestauranteTrattoria');


//const { MongoClient, GridFSBucket } = require('mongodb');
require('dotenv').config();


const MONGO_URL = process.env.MONGO_URL;
//const dbName = process.env.DB_NAME;

mongoose.connection.once('open', () => {
    console.log('Mongoose/Mongo Connection has started')
});

mongoose.connection.on('error', (err) => {
    console.log('An error has occured', err)
});

const connectToMongoose = async() => {
    await mongoose.connect(MONGO_URL);
};

const disconnectFromMongoose = async() => {
    await mongoose.disconnect();
}
module.exports = { connectToMongoose , disconnectFromMongoose}