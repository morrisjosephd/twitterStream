const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/netflow';

mongoose.connect(dbURI);

let db = mongoose.connection;

db.on('connected', () => console.log(`Mongoose connected to ${dbURI}`));
db.on('error', err => console.log(`Mongoose connection error: ${err}`));
db.on('disconnected', () => console.log(`Mongoose disconnected`));
