import React, { Component } from 'react'
import { Col, Row, Button } from 'reactstrap';
import withFullWidthNoConversions from '../../../../components/withFullWidthNoConversions';

class Pricing extends Component {
  render() {
    return (
        <React.Fragment>
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
            <Row>
                <div className="purple-bg" />
                <Col>
                    <div className="d-flex flex-column price-container">
                        <div className="price-body-container d-flex flex-column justify-content-between">
                            <div className="d-flex  justify-content-between">
                                <div className="d-flex flex-column price-item">
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
                                <div className="d-flex flex-column price-item">
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
                                            <div className="price-bold">
                                                GrowTiger Branding
                                            </div>
                                        </div>
                                        <div className="price-1-text-contents">
                                            Email Support
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column price-item">
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
                                            <div className="price-bold">
                                                GrowTiger Branding
                                            </div>
                                        </div>
                                        <div className="price-1-text-contents">
                                            Email Support
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
  }
}

export default withFullWidthNoConversions(Pricing);
