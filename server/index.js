const fs = require('fs');
const io = require('socket.io')();
const Twitter = require('twitter');
const streamHandler = require('./streamHandler');
const log = require('./log');
const config = require('./config/development.config');

// start socket.io server
io.listen(config.socketioPort);
console.log('listening on port ', config.socketioPort);

// connect to database and load schemas
const models_path = `${__dirname}/models/`;
fs.readdirSync(models_path).forEach(file => {
  if(file.indexOf('.js')) {
    require(`${models_path}${file}`)
  }
});

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

  socket.on('disconnect', reason => {
    log.socketDisConnection(socketId, reason);
  })
});
