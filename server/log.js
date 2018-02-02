module.exports.socketConnection = (id) => {
  console.log(`Connection - {socket: ${id}}`);
};

module.exports.socketDisConnection = (id, reason) => {
  console.log(`Disconnection - {socket: ${id}} - ${reason}` )
};

module.exports.twitterConnection = (id) => {
  console.log(`subscribed to Twitter {socket: ${id}}`);
};
