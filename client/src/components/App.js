import React, { Component } from 'react';
import subscribeToTwitter from '../services/api';
import Tweets from './Tweets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsArray: [],
    };
    subscribeToTwitter((err, tweet) => {
      this.setState({ tweetsArray: [tweet.text, ...this.state.tweetsArray.slice(0, 99)] });
    });
  }

  render() {
    return (
      <div className="netFlow-app">Tweet O'matic 2000
        <Tweets tweets={this.state.tweetsArray} />
      </div>
    );
  }
}

export default App;
