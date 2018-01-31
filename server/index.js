const io = require('socket.io')();
const Twitter = require('twitter');
const config = require('./scripts/environment-variables');

const PORT = 8000;

const twit = new Twitter({
  consumer_key: config.CONSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token_key: config.ACCESS_TOKEN_KEY,
  access_token_secret: config.ACCESS_TOKEN_SECRET
});

io.on('connection', client => {
  client.on('subscribeToTwitter', () => {
    console.log('client is subscribing to twitter');

    twit.stream('statuses/filter', { track: 'Javascript' }, stream => {
      stream.on('data', data => client.emit('tweet', data.text));
      stream.on('error', err => console.log(err));
    });
  });
});

io.listen(PORT);
console.log('listening on port ', PORT);
