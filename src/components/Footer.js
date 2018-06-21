import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Container>
          <Row>
            <Col xs={{size: 12, order: 1 }} md={{size: 6, order: 0 }}>
              <div className="footer-left">
                <img width="193" className="fl-logo-img" height="41" src={require(`../img/logo@1x.png`)} alt="logo" />
                <div className="get-started">
                  Get started right away!
                </div>
                <div className="footer-signup d-flex">
                  <input className="footer-left" type="text" placeholder="Enter you email" />
                  <Button className="signup-beta"> Sign up for Beta </Button>
                </div>
                <div className="footer-address d-flex flex-column">
                  <div>8 Claymore Hill, #03-01, Singapore 229572</div>
                  <div>altmanager is a product by High Output Ventures</div>
                </div>
              </div>
            </Col>
            <Col xs={{size: 12, order: 0 }} md={{size: 6, order: 1 }}>
              <img width="193" className="fr-logo-img" height="41" src={require(`../img/logo@1x.png`)} alt="logo" />
              <div className="footer-right d-flex justify-content-around">
                <div className="footer-menu d-flex flex-column">
                  <div className="fm-header">
                    MENU
                  </div>
                  <div className="fm-children">
                    Home
                  </div>
                  <div className="fm-children">
                    Dashboard
                  </div>
                  <div className="fm-children">
                    Blog
                  </div>
                </div>
                <div className="footer-menu d-flex flex-column">
                  <div className="fm-header">
                    ABOUT US
                  </div>
                  <div className="fm-children">
                    Company
                  </div>
                  <div className="fm-children">
                    Values
                  </div>
                  <div className="fm-children">
                    Careers
                  </div>
                </div>
                <div className="footer-menu d-flex flex-column">
                  <div className="fm-header">
                    SOCIAL NETWORK
                  </div>
                  <div className="fm-children d-flex justify-content-between">
                    <FaTwitter size={21} />
                    <FaLinkedIn size={21} />
                    <FaFacebookSquare size={21} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;