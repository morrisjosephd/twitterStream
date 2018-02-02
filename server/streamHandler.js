module.exports = (socket, twitter) => {
  twitter.stream('statuses/filter', { track: 'trump' }, stream => {
    stream.on('data', data => socket.emit('tweet', data));
    stream.on('error', err => console.log(err));
  });
};