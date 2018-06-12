import React, { Component } from 'react'
import { Col, Row, Button, Container } from 'reactstrap';
import PaintBrush from 'react-icons/lib/io/paintbrush';
import AndroidStar from 'react-icons/lib/io/android-star';
import IoTelephone from 'react-icons/lib/io/ios-telephone';

import Navbar from '../../../../components/Navbar';
import Footer from '../../../../containers/Components/Footer';

class Pricing extends Component {
  render() {
    return (
        <React.Fragment>
            <Container>
                <Navbar />
                <Row>
                    <Col>
                        <div className="d-flex price-upper flex-column justify-content-center m-auto">
                            <div className="pricing-header-container">
                                <div className="pricing-header m-auto">
                                    Pricing
                                </div>
                                <div className="pricing-body m-auto">
                                    Start For Free and Only Pay After You See Results
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="purple-bg">
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="4" xl="4" className="px-0">
                            <div className="d-flex flex-column price-item-1 price-item">
                                <div className="price-1 d-flex justify-content-center flex-column mr-auto">
                                    <div className="price-1-header m-auto">
                                        New Business
                                    </div>
                                    <div className="price-1-price d-flex align-items-end m-auto">
                                        <div className="price"> $0 </div> /mo
                                    </div>
                                    <div className="price-1-button mr-auto ml-auto">
                                        <Button className="get-started">
                                            GET STARTED
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-white price-lists">
                                    <div className="price-1-text-contents d-flex">
                                        <strong>
                                            5,000
                                        </strong>
                                        &nbsp; Unique Visitors / mo
                                    </div>
                                    <div className="price-1-text-contents">
                                        Unlimited Domains
                                    </div>
                                    <div className="price-1-text-contents">
                                        Unlimited Notifications
                                    </div>
                                    <div className="price-1-text-contents">
                                        Custom Rules and Timing
                                    </div>
                                    <div className="price-1-text-contents">
                                        Highlight Activity
                                    </div>
                                    <div className="price-1-text-contents">
                                        Live Visitor Count
                                    </div>
                                    <div className="price-1-text-contents">
                                            Sales Streaks
                                    </div>
                                    <div className="price-1-text-contents">
                                        <strong>
                                            GrowTiger Branding
                                        </strong>
                                    </div>
                                    <div className="price-1-text-contents">
                                        <strong>Email Support</strong>
                                    </div>
                                </div>
                            </div>                
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="4" xl="4" className="px-0">
                            <div className="d-flex flex-column price-item-2 price-item">
                                <div className="price-1 d-flex justify-content-center flex-column mr-auto">
                                    <div className="price-1-header starter m-auto">
                                        Starter Plan
                                    </div>
                                    <div className="price-1-price d-flex align-items-end m-auto">
                                        <div className="price"> $19 </div> /mo
                                    </div>
                                    <div className="price-1-button mr-auto ml-auto">
                                        <Button className="get-started">
                                            GET STARTED
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-white price-lists">
                                    <div className="price-1-text-contents d-flex">
                                        <strong>
                                            10,000
                                        </strong>
                                        &nbsp; Unique Visitors / mo
                                    </div>
                                    <div className="price-1-text-contents">
                                        Unlimited Domains
                                    </div>
                                    <div className="price-1-text-contents">
                                        Unlimited Notifications
                                    </div>
                                    <div className="price-1-text-contents">
                                        Custom Rules and Timing
                                    </div>
                                    <div className="price-1-text-contents">
                                        Highlight Activity
                                    </div>
                                    <div className="price-1-text-contents">
                                        Live Visitor Count
                                    </div>
                                    <div className="price-1-text-contents">
                                            Sales Streaks
                                    </div>
                                    <div className="price-1-text-contents">
                                        <PaintBrush className="paint-brush mr-1" color="#7B79C9" size={18} />
                                        <strong>
                                            No Branding
                                        </strong>
                                    </div>
                                    <div className="price-1-text-contents">
                                        <IoTelephone className="io-telephone mr-1" color="#F0B305" size={18} /><strong>Email & Live Chat Support</strong>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="4" xl="4" className="px-0">
                            <div className="d-flex flex-column price-item-3 price-item">
                                <div className="price-1 d-flex justify-content-center flex-column mr-auto">
                                    <div className="price-1-header pro-seller m-auto">
                                        Pro Seller
                                    </div>
                                    <div className="price-1-price d-flex align-items-end m-auto">
                                        <div className="price"> $49 </div> /mo
                                    </div>
                                    <div className="price-1-button mr-auto ml-auto">
                                        <Button className="get-started">
                                            GET STARTED
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-white price-lists">
                                    <div className="price-1-text-contents d-flex">
                                        <strong>
                                            50,000
                                        </strong>
                                        &nbsp; Unique Visitors / mo
                                    </div>
                                    <div className="price-1-text-contents">
                                        Unlimited Domains
                                    </div>
                                    <div className="price-1-text-contents">
                                        Unlimited Notifications
                                    </div>
                                    <div className="price-1-text-contents">
                                        Custom Rules and Timing
                                    </div>
                                    <div className="price-1-text-contents">
                                        Highlight Activity
                                    </div>
                                    <div className="price-1-text-contents">
                                        Live Visitor Count
                                    </div>
                                    <div className="price-1-text-contents">
                                            Sales Streaks
                                    </div>
                                    <div className="price-1-text-contents">
                                        <PaintBrush className="paint-brush mr-1" color="#7B79C9" size={18} />
                                        <strong>
                                            No Branding
                                        </strong>
                                    </div>
                                    <div className="price-1-text-contents">
                                        <AndroidStar color="#F0B305" className="mr-1" size={18} />
                                        <strong>Priority Support</strong>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Footer />
            </Container>
        </React.Fragment>
    )
  }
}

export default Pricing;
