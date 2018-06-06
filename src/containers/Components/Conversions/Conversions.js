import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';

export default class componentName extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="m-auto conversions">
            <img alt="" className="dots-teal" src={require(`../../../img/dots-teal@1x.png`)} />
            <img alt="" className="dots-purple" src={require(`../../../img/dots-purple@1x.png`)} />
            <div className="d-flex m-auto conversions-container">
              <div className="conversions-left d-flex flex-column">
                <div className="conversions-header">
                  Boost your Store Conversions with Social Proof
                </div>
                <div className="conversions-body">
                  Get an edge over a majority of Shopify sellers. Get started in under 1 minute.
                </div>
              </div>
              <div className="conversions-right d-flex justify-content-center m-auto">
                <Button className="btn-sign-up">
                  SIGN UP FOR FREE
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
