
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

class Review extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="px-0">
            <img alt="" className="dots-teal-review" src={require(`../../../img/dots-teal@1x.png`)} />
            <img alt="" className="dots-purple-review" src={require(`../../../img/dots-purple@1x.png`)} />
            <div className="review-container d-flex flex-column m-auto">
              <div className="review-header"> What Our Customers Say </div>
              <div className="d-flex review-body">
                <div className="macbook-container">
                  <img alt="" className="macbook-notifs" src={require(`../../../img/macbook-and-notification@1x.png`)} />
                </div>
                <div className="d-flex flex-column hannah-container">
                  <div className="hannah-statement">
                    "We needed a platform that knew our industry, understood our business, and the program we wanted to run. We found that with Smile!"
                  </div>
                  <div className="d-flex hannah-data align-items-center">
                    <img alt="" className="hannah-avatar" src={require(`../../../img/avatar.jpg`)} />
                    <div className="d-flex flex-column hannah-info">
                      <div className="hannah-name">
                        Hannah
                      </div>
                      <div className="hannah-site">
                        www.juangear.ph
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Review;

