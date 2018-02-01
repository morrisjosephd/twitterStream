module.exports = socket => {
  const socketId = socket.id;

  console.log(`Connection - {socket: ${socketId}}`);

  socket.on('subscribeToTwitter', () => console.log(`${socketId} subscribed to Twitter`));
  socket.on('disconnect', reason => console.log(`Disconnection - {socket: ${socketId}} - ${reason}` ));
};