import React, { Component } from 'react';
import subscribeToTwitter from '../services/api';

const styles = {
  tweet: {
    marginTop: '50px',
    padding: '15px',
    backgroundColor: 'black',
    color: 'white',
  },
};

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
        <div style={styles.tweet}>{this.state.tweetText}</div>
      </div>
    );
  }
}

export default App;
