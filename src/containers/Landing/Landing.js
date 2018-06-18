import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import PaintBrush from 'react-icons/lib/io/paintbrush';
import AndroidStar from 'react-icons/lib/io/android-star';
import IoTelephone from 'react-icons/lib/io/ios-telephone';
import ArrowForward from 'react-icons/lib/io/android-arrow-forward';

const macbook1 = require('../../img/macbook-and-notification@1x.png');
const macbook2 = require('../../img/macbook-and-notification@2x.png');
const how1 = require('../../img/How@1x.png');
const how2 = require('../../img/How@2x.png');
const shopify1 = require('../../img/shopify-love@1x.png');
const shopify2 = require('../../img/shopify-love@2x.png');

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <Row>
            <Col 
              xs={{ size: 12, order: 1 }} 
              sm={{ size: 12, order: 1 }} 
              md={{ size: 6, order: 0 }} 
              lg={{ size: 6, order: 0 }}
              style={{ zIndex: 2 }}
            >
              <div className="boost-container d-flex">
                <div className="boost-left">
                  <div className="bl-header">
                    Boost your Store Conversions with Social Proof
                  </div>
                  <div className="bl-body">
                    Shopify sellers: instantly boost conversions with a single-click install
                  </div>
                  <div className="bl-btn-container d-flex">
                    <Button className="bl-btn-signup">
                      SIGN UP FOR FREE
                    </Button>
                    <Button className="bl-btn-demo">
                      GET A LIVE DEMO
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col 
              xs={{ size: 12, order: 0 }} 
              sm={{ size: 12, order: 0 }} 
              md={{ size: 6, order: 0 }} 
              lg={{ size: 6, order: 0 }}
            >
              <div className="br-img" />
            </Col>
          </Row>
        </Container>
        <div className="hannah-review-dots-purple"/>
        <div className="hannah-review-dots-teal"/>
        <Container>
          <Row className="hannah-row">
            <Col xs="12">
              <div className="hannah-header">
                What our Customer Say
              </div>
            </Col>
            <Col className="hannah-row-2">
              <div className="d-inline-flex review-parent">
                <div className="macbook-notifs-container">
                  <img alt="" className="macbook-notifs" src={require('../../img/macbook-and-notification@1x.png')} srcset={`${macbook1} 1x, ${macbook2} 2x`} />
                </div>
                <div className="hannah-container d-flex flex-column">
                  <div className="hannah-statement">
                    "This app work's like magic. After a one-click install, my revenue started to grow regularly. Getting their daily performance email is now my favorite part of the day!"
                  </div>
                  <div className="d-flex">
                    <div className="hannah-avatar" />
                    <div className="d-flex flex-column">
                      <div className="hannah-name"> Hannah </div>
                      <div className="hannah-site"> www.juangear.ph </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="shopify-bg-left"/>
        <div className="shopify-bg-right"/>
        <Container>
          <Row className="how-row">
            <Col xs="12">
              <div className="d-flex flex-column justify-content-center shopify-parent">
                <img alt="" className="shopify-love-logo" src={shopify1} srcset={`${shopify1} 1x, ${shopify2} 2x`} />
                <div className="shopify-header">
                  Built specifically to help Shopify Store owners
                </div>
                <div className="shopify-body-1">
                  Launching a store is hard work. We need to get our suppliers, all our product images and pricing just right. After all of that work we persuade our friends and family to visit the store. You make your first sale. That is a feeling one never forgets.
                </div>
                <div className="shopify-body-2">
                  However soon that first sale is a memory. New website visitors don't know about all the people who buy from you. With GrowTiger that all changes. All website visitors are told about your stores success, the products that are selling and that gives them the confidence to buy.
                </div>
                <div className="shopify-footer">
                  Launch your social proof widget in under 1 minute <ArrowForward size={20} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="how-row">
            <Col xs="12">
              <div className="d-flex justify-content-between how-parent">
                <div className="how-left d-flex flex-column">
                  <div className="hl-header">
                    Do I need to know how to code?
                  </div>
                  <div className="hl-body">
                    Nope! Launch and manage your next social proof campaign in under a minute, no coding required. See for yourself! <span aria-label="point-down" role="img">👇</span>
                  </div>
                  <div className="hl-footer">
                    Launch your social proof widget in under 1 minute <ArrowForward size={20} />
                  </div>
                </div>
                <div className="how-right">
                  <img alt="" className="how-img" src={how1} srcset={`${how1} 1x, ${how2} 2x`} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="conversions-bg-left"/>
        <div className="conversions-bg-right"/>
        <Container>
          <Row className="how-row">
            <Col xs="12">
              <div className="d-flex justify-content-between conversions-parent">
                <div className="conversions-left d-flex flex-column">
                  <div className="conversions-header">
                    Boost your Store Conversions with Social Proof
                  </div>
                  <div className="conversions-body">
                    Get an edge over a majority of Shopify sellers. Get started in under 1 minute.
                  </div>
                </div>
                <div className="conversions-right align-self-center">
                  <Button className="cvns-btn-signup">
                    SIGN UP FOR FREE <ArrowForward size={20} />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
