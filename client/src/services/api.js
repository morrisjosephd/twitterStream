import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

export default function subscribeToTwitter(cb) {
  socket.on('tweet', tweet => cb(null, tweet));
  socket.emit('subscribeToTwitter');
}
