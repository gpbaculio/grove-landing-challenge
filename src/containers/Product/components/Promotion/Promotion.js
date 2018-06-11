import React, { Component } from 'react'
import { Col, Row, Button } from 'reactstrap';
import withFullWidth from '../../../../components/withFullWidth';
import ArrowForward from 'react-icons/lib/io/android-arrow-forward';

class Pricing extends Component {
  render() {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="d-flex pricing-container">
                        <div className="d-flex flex-column pricing-left">
                            <div className="pricing-1">
                                Leave the promotion to us, focus on sourcing the best products
                            </div>
                            <div className="pricing-2">
                                Selling successfully online is hard. GrowTiger makes it a little easier. 
                            </div>
                            <Button className="pricing-3 boost-btn-sign-up">
                                SIGN UP FOR FREE
                            </Button>
                        </div>
                        <div className="pricing-right d-flex justify-content-end">
                            <img alt="" className="pricing-right-img" src={require(`../../../../img/Product@1x.png`)} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex flex-column justify-content-center why-container">
                        <div className="why-header">
                            Why GrowTiger?
                        </div>
                        <div className="why-body">
                            GrowTiger makes your customer feel that they are in an actual store. They get notifications about recent purchases and people who are browsing products. This triggers emotions of urgency and confidence in the store. Results in improved conversions for you!
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="laptop-1" />
                <Col md="6 d-flex ml-auto">
                    <div className="d-flex highlight-parent">
                        <img alt="" className="highlight-img" src={require(`../../../../img/laptop1small@1x.png`)} />
                        <div className="d-flex ml-auto flex-column highlight-container">
                            <div className="laptop-star" />
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
                </Col>
            </Row>
            <Row>
                <div className="laptop-2" />
                <Col md="6 d-flex mr-auto">
                    <div className="d-flex highlight-parent">
                        <img alt="" className="highlight-img" src={require(`../../../../img/laptop-2-small@1x.png`)} />
                        <div className="d-flex ml-auto flex-column sales-container">
                            <div className="icon-flame" />
                            <div className="sales-header">
                                Sales Streaks
                            </div>
                            <div className="sales-body">
                                Every store has a couple of products that are continuously hot sellers. The problem is: how does a new person to your website know about them? The Sales Streak notification takes a look at your past sales and automatically starts highlighting your best products.
                            </div>
                            <div className="sales-footer text-left">
                                Get the notification for your store and stop missing out on sales <ArrowForward size={20} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="laptop-3" />
                <Col md="6 d-flex ml-auto">
                    <div className="d-flex highlight-parent">
                        <img alt="" className="highlight-img" src={require(`../../../../img/laptop-3-small@1x.png`)} />
                        <div className="d-flex ml-auto flex-column visitors-container">
                            <div className="icon-flame" />
                            <div className="visitors-header">
                                Live Visitor Counts
                            </div>
                            <div className="visitors-body">
                                Store traffic is one of the strongest social validation signs. New prospects tend to stay longer on the site and browse more products. Without the Live Visitor Notification unfortunately no one knows about how your store is doing.
                            </div>
                            <div className="visitors-footer text-left">
                                Get the notification for your store and increase your credibility <ArrowForward size={20} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
  }
}

export default withFullWidth(Pricing);
