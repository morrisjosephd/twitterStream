const io = require('socket.io')();
const Twitter = require('twitter');

const PORT = 3001;

const twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

io.on('connection', client => {
  client.on('subscribeToTwitter', () => {
    console.log('client is subscribing to twitter');

    twitter.stream('statuses/filter', { track: 'Javascript' }, stream => {
      stream.on('data', data => client.emit('tweet', data.text));
      stream.on('error', err => console.log(err));
    });
  });
});

io.listen(PORT);
console.log('listening on port ', PORT);
