import React, { Component } from 'react';
import Landing from './Landing';
import Review from '../Components/Review';
import Shopify from '../Components/Shopify';
import Launch from '../Components/Launch';
import Conversions from '../Components/Conversions';

import withFullWidth from '../../components/withFullWidth';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <Review />
        <Shopify />
        <Launch />
        <Conversions />
      </React.Fragment>
    );
  }
}

export default withFullWidth(Homepage);

