import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Product from './containers/Product';
import Pricing from './containers/Pricing';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/product" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;


