import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

export default function subscribeToTwitter(cb) {
  socket.on('tweet', tweetText => cb(null, tweetText));
  socket.emit('subscribeToTwitter', 1000);
}
