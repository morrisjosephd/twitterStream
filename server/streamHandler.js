const socketManager = require('./socketManager');

module.exports = (io, stream) => {
  io.on('connect', socketManager);

  stream.on('data', data => io.emit('tweet', data));
  stream.on('error', err => console.log(err));
};