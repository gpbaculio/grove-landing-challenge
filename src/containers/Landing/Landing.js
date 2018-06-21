import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <img alt="" className="hero-bg" src={require('../../img/hero@1x.png')} srcset={`${require('../../img/hero@1x.png')} 1x, ${require('../../img/hero@2x.png')} 2x`} />
        <div className="hero-bg" />
        <Navbar />
        <Container>
          <Row>
            <Col>
              <div className="stress-container">
                <div className="stress-header">Stress-Free Portfolio Management</div>
                <div className="stress-body">Managing a portfolio of altcoins across mulitiple exchanges is difficult. Policy changes can cause serious disruption to our strategy. We created altmanager to make your portfolio immune to all of these changes.</div>
                <div className="stress-footer d-flex">
                  <input className="sf-left" type="text" placeholder="Enter you email" />
                  <Button className="signup-beta"> Sign up for Beta </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ backgroundColor: 'transparent' }}>
          <Row>
            <Col>
              <div className="feature-parent">
                <div className="feature-header">Feature Overview</div>
                <div className="feature-body">Our initial product release will provide traders with the ability to manage their portfolio with far greater ease. We have built the key features that will make the transition to altmanager seamless.</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <div className="feature-container">
                <img className="feature-img" src={require('../../img/combinedShape@1x.png')} srcset={`${require('../../img/combinedShape@1x.png')} 1x, ${require('../../img/combinedShape@2x.png')} 2x`} />
                <div className="feature-header">
                  MANAGE OPEN ORDERS
                </div>
                <div className="feature-body">
                  Our system connects with exchanges and places buy and sell orders based on your requirements. When these orders expire they will be resubmited for you.
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="feature-container">
                <img className="feature-img" src={require('../../img/combinedShape2@1x.png')} srcset={`${require('../../img/combinedShape2@1x.png')} 1x, ${require('../../img/combinedShape2@2x.png')} 2x`} />
                <div className="feature-header">
                  COIN-BASED NEWSFEED
                </div>
                <div className="feature-body">
                  Our system is conected with hundreds of news sources from the biggest sites to obscure sub reddits. Get the latest news about your coins as it breaks.
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <div className="feature-container">
                <img className="notifs-img" src={require('../../img/alerts@1x.png')} srcset={`${require('../../img/alerts@1x.png')} 1x, ${require('../../img/alerts@2x.png')} 2x`} />
                <div className="feature-header">
                  ALERTS & NOTIFICATIONS
                </div>
                <div className="feature-body">
                  Get notified when your levels are hit on your mobile detavice or through email. Never miss a trade and make sure you are ontop of your portfolios performance.
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="feature-container">
                <img className="security-img" src={require('../../img/security@1x.png')} srcset={`${require('../../img/security@1x.png')} 1x, ${require('../../img/security@2x.png')} 2x`} />
                <div className="feature-header">
                  SECURITY MEASURES
                </div>
                <div className="feature-body">
                  Protect your account with 2fa and everytime you make changes to your orders it needs to be verified by your 2fa key to avoid exploitation.
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="product-parent">
                <div className="product-header">Product</div>
                <div className="product-body">
                  Being traders ourselves we have built a product that we would want to use everyday. Easy to use interfaces which do what they are supposed to. Laser focused to make portfolio management a breeze.
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <div className="manager-left-parent push-left">
                <div className="manager-header">
                  Open Order Manager
                </div>
                <div className="manager-body">
                  Open order management is a critical function for every active trader. Automatical set levels and open new orders when certain conditions are met.
                </div>
                <div className="manager-footer">
                  <Button className="manager-btn">
                    Manage Orders
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <img alt=""
                className="product-snapshot"
                src={require('../../img/product-snapshot@1x.png')}
                srcset={
                  `${require('../../img/product-snapshot@1x.png')} 1x,
                  ${require('../../img/product-snapshot@2x.png')} 2x`
                }
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="12" lg="4">
                <div className="manage-order-parent d-flex flex-column">
                  <div className="manage-order-img-container">
                    <img
                      alt=""
                      className="manager-order-img"
                      src={require('../../img/Script@1x.png')}
                      srcset={
                        `${require('../../img/Script@1x.png')} 1x,
                        ${require('../../img/Script@2x.png')} 2x`
                      }
                    />
                  </div>
                  <div className="manage-order-body">
                    Skip all the tedious data entry that most portfolio managers make you do when addig them. Portfolios wil update based on your excahnge account balances.
                  </div>
                </div>
            </Col>
            <Col xs="12" md="6" lg="4">
                <div className="manage-order-parent d-flex flex-column">
                  <div className="manage-order-img-container">
                    <img
                      alt=""
                      className="manager-order-img"
                      src={require('../../img/Orders@1x.png')}
                      srcset={
                        `${require('../../img/Orders@1x.png')} 1x,
                        ${require('../../img/Orders@2x.png')} 2x`
                      }
                    />
                  </div>
                  <div className="manage-order-body">
                    Keep track of how much profit or loss you are making on each of your coins in your portfolio.
                  </div>
                </div>
            </Col>
            <Col xs="12" md="6" lg="4">
                <div className="manage-order-parent d-flex flex-column">
                  <div className="manage-order-img-container">
                    <img
                      alt=""
                      className="manager-order-img"
                      src={require('../../img/key@1x.png')}
                      srcset={
                        `${require('../../img/key@1x.png')} 1x,
                        ${require('../../img/key@2x.png')} 2x`
                      }
                    />
                  </div>
                  <div className="manage-order-body">
                    Add custom coins to track your ICO purchases or other coins that you are not storing on exchanges.
                  </div>
                </div>
            </Col>
          </Row>
          <Row  className="portfolio-row">
            <Col xs="12" lg="6">
              <img alt=""
                className="active-portfolio"
                src={require('../../img/active-portfolio@1x.png')}
                srcset={
                  `${require('../../img/active-portfolio@1x.png')} 1x,
                  ${require('../../img/active-portfolio@2x.png')} 2x`
                }
              />
            </Col>
            <Col xs="12" lg="6">
                <div className="manager-grandparent">
                  <div className="manager-right-parent">
                    <div className="manager-header">
                      Portfolio Manager
                    </div>
                    <div className="manager-body">
                      Keep track of all your coins. Set alerts to notify when certain levels are hit to ensure that you can modify your open orders if needs be.
                    </div>
                    <div className="manager-footer">
                      <Button className="manager-btn">
                        Manage Portfolio
                      </Button>
                    </div>
                  </div>
                </div>
            </Col>
          </Row>
          <Row className="tracker-row">
            <Col xs="12" lg="6">
              <div className="manager-left-parent push-left">
                <div className="manager-header">
                  Coin News Tracker
                </div>
                <div className="manager-body">
                Keep track of all the news about each individual coin in your portfolio. We find the latest key fundamental events and alert you for you to adjust strategy.
                </div>
                <div className="manager-footer">
                  <Button className="manager-btn">
                    Track Coin News
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <img alt=""
                className="product-snapshot"
                src={require('../../img/product-snapshot@1x.png')}
                srcset={
                  `${require('../../img/product-snapshot@1x.png')} 1x,
                  ${require('../../img/product-snapshot@2x.png')} 2x`
                }
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="12" lg="4">
                <div className="manage-order-parent d-flex flex-column">
                  <div className="manage-order-img-container">
                    <img
                      alt=""
                      className="manager-order-img"
                      src={require('../../img/Script@1x.png')}
                      srcset={
                        `${require('../../img/Script@1x.png')} 1x,
                        ${require('../../img/Script@2x.png')} 2x`
                      }
                    />
                  </div>
                  <div className="manage-order-body">
                    Get coin specific news update. We scour the web and thousands of unique resources to find you relevant news about the coins in your portfolio.
                  </div>
                </div>
            </Col>
            <Col xs="12" md="6" lg="4">
                <div className="manage-order-parent d-flex flex-column">
                  <div className="manage-order-img-container">
                    <img
                      alt=""
                      className="manager-order-img"
                      src={require('../../img/Orders@1x.png')}
                      srcset={
                        `${require('../../img/Orders@1x.png')} 1x,
                        ${require('../../img/Orders@2x.png')} 2x`
                      }
                    />
                  </div>
                  <div className="manage-order-body">
                    Fundamental news even tracker will ensure that you stay on top of situation and adjust your strategy.
                  </div>
                </div>
            </Col>
            <Col xs="12" md="6" lg="4">
                <div className="manage-order-parent d-flex flex-column">
                  <div className="manage-order-img-container">
                    <img
                      alt=""
                      className="manager-order-img"
                      src={require('../../img/key@1x.png')}
                      srcset={
                        `${require('../../img/key@1x.png')} 1x,
                        ${require('../../img/key@2x.png')} 2x`
                      }
                    />
                  </div>
                  <div className="manage-order-body">
                    See how certain pieces of news impact the price of your coins.
                  </div>
                </div>
            </Col>
          </Row>
          <Row className="security-integrations-row">
            <Col xs="12" md="6">
              <div className="security-integrations-parent parent-left d-flex flex-column">
                <div className="security-integrations-header">
                  Security
                </div>
                <div className="security-integrations-body">
                  We take security of your accounts very seriously. Other than the basic measures of securing all data over SSL connections, all critical actions require 2FA to ensure that your account stays secure.
                </div>
                <div className="security-integrations-img-container">
                  <img
                    alt=""
                    className="security-integrations-img"
                    src={require('../../img/spot-security@1x.png')}
                    srcset={
                      `${require('../../img/spot-security@1x.png')} 1x,
                      ${require('../../img/spot-security@2x.png')} 2x`
                    }
                  />
                </div>        
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="security-integrations-parent parent-right d-flex flex-column">
                <div className="security-integrations-header">
                  Integrations
                </div>
                <div className="security-integrations-body">
                  Our goal is to eventually cover all major exchanges that provide the ability to manage portfolios through an API. We are going to be slowly rolling out each exchange. Listed below is the roadmap of our priorities.
                </div>
                <div className="security-integrations-img-container d-flex">
                  <div className="integration-parent flex-grow-1">
                    <img
                      alt=""
                      className="integration-1-img"
                      src={require('../../img/integration-1@1x.png')}
                      srcset={
                        `${require('../../img/integration-1@1x.png')} 1x,
                        ${require('../../img/integration-1@2x.png')} 2x`
                      }
                    />
                    <div className="integration-footer">
                      Launched in beta
                    </div>
                  </div>
                  <div className="integration-parent flex-grow-1">
                    <img
                      alt=""
                      className="integration-2-img"
                      src={require('../../img/integration-2@1x.png')}
                      srcset={
                        `${require('../../img/integration-2@1x.png')} 1x,
                        ${require('../../img/integration-2@2x.png')} 2x`
                      }
                    />
                    <div className="integration-footer">
                      Coming soon
                    </div>
                  </div>
                  <div className="integration-parent flex-grow-1">
                    <img
                      alt=""
                      className="integration-3-img"
                      src={require('../../img/integration-3@1x.png')}
                      srcset={
                        `${require('../../img/integration-3@1x.png')} 1x,
                        ${require('../../img/integration-3@2x.png')} 2x`
                      }
                    />
                    <div className="integration-footer">
                      Coming soon
                    </div>
                  </div>
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
