const io = require('socket.io')();
const Twitter = require('twitter');
const streamHandler = require('./streamHandler');
const log = require('./log');
const config = require('./config/development.config');
// connect to DB
require('./models/db');

// start socket.io server
io.listen(config.socketioPort);
console.log('listening on port ', config.socketioPort);

const twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

io.on('connect', socket => {
  const socketId = socket.id;

  log.socketConnection(socketId);

  socket.on('subscribeToTwitter', () => {
    log.twitterConnection(socketId);
    streamHandler(socket, twitter);
  });

});
