let Tweet =require('./../models/Tweet');

module.exports.saveTweet = (data) => {
  let tweetObject = {
    id_str: data.id_str,
    text: data.text,
    user: {
      id_str: data.user.id_str,
      name: data.user.name,
      screen_name: data.user.screen_name,
      location: data.user.location,
      description: data.user.description,
      followers_count: data.user.followers_count,
      friends_count: data.user.friends_count,
      time_zone: data.user.time_zone,
    }
  };

  let tweet = new Tweet(tweetObject);

  tweet.save((err, doc) => {
    err ? console.log(err) : console.log('successful save');
  });
};