import React, { Component } from 'react'
import { Row, Col, Button, Container } from 'reactstrap';

import PaintBrush from 'react-icons/lib/io/paintbrush';
import AndroidStar from 'react-icons/lib/io/android-star';
import IoTelephone from 'react-icons/lib/io/ios-telephone';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <Row>
            <Col>
              <div className="d-flex flex-column pricing-upper">
                <div className="pu-header">
                  Pricing
                </div>
                <div className="pu-body">
                  Start For Free and Only Pay After You See Results
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="prices-bg">
          <div className="pricing-dots-purple-left"/>
          <div className="pricing-dots-purple-right"/>
          <Container>
              <Row>
                  <Col xs="12" md="12" lg="4">
                    <div className="pricing-parent d-flex flex-column pricing-1">
                      <div className="pricing-header">
                        New Business
                      </div>
                      <div className="d-flex align-items-end price-container">
                        <div className="pricing-dollar">$0</div><div className="mo">/mo</div>
                      </div>
                      <Button className="pricing-btn">
                        GET STARTED
                      </Button>
                      <div className="price-content-texts">
                        <div>
                          <strong>5000</strong> Unique visitors / mo
                        </div>
                        <div>
                          Unlimited Domains
                        </div>
                        <div>
                          Unlimited Notifications
                        </div>
                        <div>
                          Custom Rules & Timing
                        </div>
                        <div>
                          Highlight Activity
                        </div>
                        <div>
                          Live Visitor Count
                        </div>
                        <div>
                          Sales Streaks
                        </div>
                        <div>
                          <strong>GrowTiger Branding</strong>
                        </div>
                        <div>
                          <strong>Email Support</strong>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="6" lg="4">
                    <div className="pricing-parent d-flex flex-column pricing-2">
                      <div className="pricing-header starter">
                        Starter Plan
                      </div>
                      <div className="d-flex align-items-end price-container">
                        <div className="pricing-dollar">$19</div><div className="mo">/mo</div>
                      </div>
                      <Button className="pricing-btn">
                        GET STARTED
                      </Button>
                      <div className="price-content-texts">
                        <div>
                          <strong>5000</strong> Unique visitors / mo
                        </div>
                        <div>
                          Unlimited Domains
                        </div>
                        <div>
                          Unlimited Notifications
                        </div>
                        <div>
                          Custom Rules & Timing
                        </div>
                        <div>
                          Highlight Activity
                        </div>
                        <div>
                          Live Visitor Count
                        </div>
                        <div>
                          Sales Streaks
                        </div>
                        <div>
                          <PaintBrush style={{ color: '#7B79C9' }} size={16} /> <strong>No Branding</strong>
                        </div>
                        <div>
                          <IoTelephone style={{ color: '#F0B305' }} size={16} /> <strong>Email & Live Chat Support</strong>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="6" lg="4">
                    <div className="pricing-parent d-flex flex-column pricing-3">
                      <div className="pricing-header pro-seller">
                        Pro Seller
                      </div>
                      <div className="d-flex align-items-end price-container">
                        <div className="pricing-dollar">$49</div><div className="mo">/mo</div>
                      </div>
                      <Button className="pricing-btn">
                        GET STARTED
                      </Button>
                      <div className="price-content-texts">
                        <div>
                          <strong>5000</strong> Unique visitors / mo
                        </div>
                        <div>
                          Unlimited Domains
                        </div>
                        <div>
                          Unlimited Notifications
                        </div>
                        <div>
                          Custom Rules & Timing
                        </div>
                        <div>
                          Highlight Activity
                        </div>
                        <div>
                          Live Visitor Count
                        </div>
                        <div>
                          Sales Streaks
                        </div>
                        <div>
                          <PaintBrush style={{ color: '#7B79C9' }} size={16} /> <strong>No Branding</strong>
                        </div>
                        <div>
                          <AndroidStar style={{ color: '#F0B305' }} size={16} /> <strong>Priority Support</strong>
                        </div>
                      </div>
                    </div>
                  </Col>
              </Row>
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
