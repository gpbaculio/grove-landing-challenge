import React, { Component } from 'react';
import Landing from './Landing';
import Review from '../Components/Review';
import Shopify from '../Components/Shopify';
import Launch from '../Components/Launch';
import Conversions from '../Components/Conversions';
import Footer from '../Components/Footer';

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <Review />
        <Shopify />
        <Launch />
        <Conversions />
        <Footer />
      </React.Fragment>
    );
  }
}

