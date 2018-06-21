import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Practice from './containers/practice';

import './css/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/practice" component={Practice} />
        </div>
      </Router>
    );
  }
}

export default App;


