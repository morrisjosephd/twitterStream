const dbService = require('./services/dbService');
const log = require('./log');

module.exports = (socket, twitter) => {
  let twitterStream;

  twitter.stream('statuses/filter', { track: 'Trump' }, stream => {
    twitterStream = stream;

    stream.on('data', data => {
      dbService.saveTweet(data);
      socket.emit('tweet', data);
    });

    stream.on('error', err => console.log(err));
  });

  socket.on('disconnect', reason => {
    twitterStream.destroy();
    log.socketDisConnection(socket.id, reason);
  });
};
