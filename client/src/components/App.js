import React, { Component } from 'react';
import subscribeToTwitter from '../services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetText: 'no tweets yet',
    };
    subscribeToTwitter((err, tweetText) => this.setState({ tweetText }));
  }

  render() {
    return (
      <div className="netFlow-app">Welcome to Netflow
        <div>Current Tweet on Javascript: {this.state.tweetText}</div>
      </div>
    );
  }
}

export default App;
