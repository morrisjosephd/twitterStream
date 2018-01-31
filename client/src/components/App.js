import React, { Component } from 'react';
import subscribeToTimer from '../services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet',
    };
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
  }

  render() {
    return (
      <div className="netFlow-app">Welcome to Netflow
        <div>This is the timer value: {this.state.timestamp}</div>
      </div>
    );
  }
}

export default App;
