const dbService = require('./services/dbService');
const log = require('./log');

module.exports = (socket, twitter) => {
  let twitterStream;

  twitter.stream('statuses/filter', { track: 'Trump' }, stream => {
    twitterStream = stream;

    stream.on('data', data => {
      if(data.text && isAnomaly(data.text)) {
        dbService.saveTweet(data);
        socket.emit('tweet', data);
        return
      }
      return console.log('tweet is just noise');
    });

    stream.on('error', err => console.log(err));
  });

  socket.on('disconnect', reason => {
    twitterStream.destroy();
    log.socketDisConnection(socket.id, reason);
  });
};

const isAnomaly = tweetText => {
  return tweetText.length > 50 && tweetText.length < 100;
};