import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import ArrowForward from 'react-icons/lib/io/android-arrow-forward';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class Product extends Component {
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
              <div className="promotions-parent">
                <div className="promotions-header">
                  Leave the promotion to us, focus on sourcing the best products
                </div>
                <div className="promotions-body-1">
                  Selling successfully online is hard. 
                </div>
                <div className="promotions-body-2">
                  GrowTiger makes it a little easier. 
                </div>
                <Button className="bl-btn-signup promotions-btn">
                  SIGN UP FOR FREE
                </Button>
              </div>
            </Col>
            <Col 
              xs={{ size: 12, order: 0 }} 
              sm={{ size: 12, order: 0 }} 
              md={{ size: 6, order: 0 }} 
              lg={{ size: 6, order: 0 }}
            >
              <div className="promotions-img align-self-end" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs="12">
              <div className="d-flex flex-column why-container">
                <div className="why-header">
                  Why GrowTiger?
                </div>
                <div className="why-body">
                  GrowTiger makes your customer feel that they are in an actual store. They get notifications about recent purchases and people who are browsing products. This triggers emotions of urgency and confidence in the store. Results in improved conversions for you!
                </div>
              </div>    
            </Col>
          </Row>
        </Container>
        <Container className="highlight-container">
          <Row>
            <Col>
              <div className="d-flex">
                <div className="hl-laptop1-container">
                  <img alt="" className="hl-laptop1" src={require('../../img/laptop-1@1x.png')} srcset={`${require('../../img/laptop-1@1x.png')} 1x, ${require('../../img/laptop-1@2x.png')} 2x`} />
                </div>
                <div className="highlight-parent d-flex flex-column">
                  <div className="highlight-left">
                    <img alt="" className="hl-laptop1" src={require('../../img/laptop1small@1x.png')} srcset={`${require('../../img/laptop1small@1x.png')} 1x, ${require('../../img/laptop1small@2x.png')} 2x`} />
                  </div>
                  <div className="highlight-right d-flex flex-column">
                    <img alt="" className="icon-star" src={require('../../img/icon-star@1x.png')} srcset={`${require('../../img/icon-star@1x.png')} 1x, ${require('../../img/icon-star@2x.png')} 2x`} />
                    <div className="highlight-header">
                      Highlight Activity
                    </div>
                    <div className="highlight-body">
                      You work hard to get people to your website and convert them into customers. Without our Highlighted Activity notification all that work goes to waste. By using GrowTiger users will be able to see all the customers that have bought from your store.
                    </div>
                    <div className="highlight-footer">
                      Get the notification for your store <ArrowForward size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="sales-container">
          <Row className="sales-row">
            <Col className="sales-col">
              <div className="d-flex">
                <div className="sales-parent d-flex flex-column">
                  <div className="sales-left">
                    <img alt="" className="hl-laptop1" src={require('../../img/laptop-2-small@1x.png')} srcset={`${require('../../img/laptop-2-small@1x.png')} 1x, ${require('../../img/laptop-2-small@2x.png')} 2x`} />
                  </div>
                  <div className="sales-right d-flex flex-column">
                    <img alt="" className="icon-star" src={require('../../img/icon-flame@1x.png')} srcset={`${require('../../img/icon-flame@1x.png')} 1x, ${require('../../img/icon-flame@2x.png')} 2x`} />
                    <div className="sales-header">
                      Sales Streaks
                    </div>
                    <div className="sales-body">
                      Every store has a couple of products that are continuously hot sellers. The problem is: how does a new person to your website know about them? The Sales Streak notification takes a look at your past sales and automatically starts highlighting your best products.
                    </div>
                    <div className="sales-footer-parent">
                      <div className="sales-footer">
                        Get the notification for your store and stop
                      </div>
                      <div style={{ marginTop: 0 }} className="sales-footer">
                        missing out on sales <ArrowForward size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sls-laptop2-container">
                  <img alt="" className="laptop-2" src={require('../../img/laptop-2@1x.png')} srcset={`${require('../../img/laptop-2@1x.png')} 1x, ${require('../../img/laptop-2@2x.png')} 2x`} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="highlight-container">
          <Row>
            <Col>
              <div className="d-flex">
                <div className="hl-laptop1-container">
                  <img alt="" className="hl-laptop1" src={require('../../img/laptop-3@1x.png')} srcset={`${require('../../img/laptop-3@1x.png')} 1x, ${require('../../img/laptop-3@2x.png')} 2x`} />
                </div>
                <div className="highlight-parent highlight-parent2 d-flex flex-column">
                  <div className="highlight-left">
                    <img alt="" className="hl-laptop1" src={require('../../img/laptop-3-small@1x.png')} srcset={`${require('../../img/laptop-3-small@1x.png')} 1x, ${require('../../img/laptop-3-small@2x.png')} 2x`} />
                  </div>
                  <div className="highlight-right d-flex flex-column">
                    <img alt="" className="icon-star" src={require('../../img/pulse-icon@1x.png')} srcset={`${require('../../img/pulse-icon@1x.png')} 1x, ${require('../../img/pulse-icon@2x.png')} 2x`} />
                    <div className="highlight-header">
                      Live Visitor Counts
                    </div>
                    <div className="highlight-body">
                      Store traffic is one of the strongest social validation signs. New prospects tend to stay longer on the site and browse more products. Without the Live Visitor Notification unfortunately no one knows about how your store is doing.
                    </div>
                    <div className="highlight2-footer-parent">
                      <div className="highlight2-footer">
                        Get the notification for your store and increase
                      </div>
                      <div style={{ marginTop: 0 }} className="highlight2-footer">
                        your credibility <ArrowForward size={20} />
                      </div>
                    </div>
                  </div>
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
    )
  }
}
