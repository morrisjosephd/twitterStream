const mongoose = require('mongoose');

let tweetSchema = new mongoose.Schema({
  text: String
});

module.exports = mongoose.model('Tweet', tweetSchema);
