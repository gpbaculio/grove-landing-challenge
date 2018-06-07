import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';

class Shopify extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="shopify-notifications-left" />
          <div className="shopify-notifications-right" />
          <Col className="px-0">
            <div className="d-flex flex-column m-auto justify-content-center shopify-container">
              <img alt="" className="shopify-love d-block m-auto" src={require(`../../../img/shopify-love@1x.png`)} />
              <div className="shopify-header m-auto">
                Built specifically to help Shopify Store owners
              </div>
              <div className="shopify-body-1 m-auto">
                Launching a store is hard work. We need to get our suppliers, all our product images and pricing just right. After all of that work we persuade our friends and family to visit the store. You make your first sale. That is a feeling one never forgets.
              </div>
              <div className="shopify-body-2 m-auto">
                However soon that first sale is a memory. New website visitors don't know about all the people who buy from you. With GrowTiger that all changes. All website visitors are told about your stores success, the products that are selling and that gives them the confidence to buy.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Shopify;
