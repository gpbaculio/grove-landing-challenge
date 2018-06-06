import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';

import withFullWidthNoHeader from '../../../components/withFullWidthNoHeader';

class Footer extends Component {
  render() {
    return (
      <Row>
        <Col className="px-0">
          <div className="footer-container d-flex flex-column">
            <div className="footer-upper d-flex align-items-end">
              <div className="fu-left">
                <img className="footer-logo" src={require(`../../../img/logo-growtiger@1x.png`)} alt="logo" />
              </div>
              <div className="d-flex ml-auto fu-right">
                <div className="fu-right-fb">
                  <FaFacebookSquare size={24} />
                </div>
                <div className="fu-right-twt">
                  <FaTwitter size={24} />
                </div>
              </div>
            </div>
            <div className="footer-bottom d-flex">
              <div className="mr-auto fb-left">
                © 2018 GrowTiger
              </div>
              <div className="ml-auto fb-right">
                hello@growtiger.com
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default withFullWidthNoHeader(Footer);
