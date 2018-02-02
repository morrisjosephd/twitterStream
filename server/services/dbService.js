let Tweet =require('./../models/Tweet');

module.exports.saveTweet = (data) => {
  let tweet = new Tweet({text: data.text});

  tweet.save((err, doc) => {
    err ? console.log(err) : console.log('successful save');
  });
};