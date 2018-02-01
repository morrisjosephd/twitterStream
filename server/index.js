const io = require('socket.io')();
const Twitter = require('twitter');
const streamHandler = require('./streamHandler');

const PORT = 3001;

const twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

twitter.stream('statuses/filter', { track: 'Javascript' }, stream => {
  streamHandler(io, stream);
});

io.listen(PORT);
console.log('listening on port ', PORT);
