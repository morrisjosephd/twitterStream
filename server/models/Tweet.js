const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
  id_str: String,
  name: String,
  screen_name: String,
  location: String,
  description: String,
  followers_count: Number,
  friends_count: Number,
  time_zone: String,

});


let tweetSchema = new mongoose.Schema({
  id_str: String,
  text: String,
  user: userSchema
});

module.exports = mongoose.model('Tweet', tweetSchema);
