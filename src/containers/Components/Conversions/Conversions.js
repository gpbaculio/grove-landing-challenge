import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import ArrowForward from 'react-icons/lib/io/android-arrow-forward';

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
                <Button className="conversions-btn-sign-up">
                  <span className="d-flex align-items-center justify-content-center">SIGN UP FOR FREE <ArrowForward size={20} /></span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
