import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import withFullWidth from '../../components/withFullWidth';

class Landing extends Component {
  render() {
    return (
      <Row>
        <Col xs={{ size: 12, order: 2 }} sm={{ size: 12, order: 2 }} md={{ size: 7, order: 1 }} lg={{ size: 7, order: 1 }} >
          <div className="d-flex flex-column boost-left">
            <div>
              Boost your Store Conversions with Social Proof
            </div>
            <div>
              Shopify sellers: instantly boost conversions with a single-click install
            </div>
            <div className="d-flex boost-btn-container">
              <Button className="btn-sign-up">
                SIGN UP FOR FREE
              </Button>
              <Button className="btn-demo">
                GET A LIVE DEMO
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={{ size: 12, order: 1 }} sm={{ size: 12, order: 1 }} md={{ size: 5, order: 2 }} lg={{ size: 5, order: 2 }} >
          <div className="boost-right">
            <img alt="" className="hero-homepage" src={require(`../../img/hero-homepage@1x.png`)} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default withFullWidth(Landing);
