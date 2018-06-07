
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

class Review extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <div className="review-dots-purple" />
            <div className="review-dots-teal" />
            <Col className="px-0">
              <div className="review-container d-flex flex-column m-auto">
                <div className="review-header"> What Our Customers Say </div>
                <div className="d-flex review-body">
                  <div className="macbook-container">
                    <img alt="" className="macbook-notifs" src={require(`../../../img/macbook-and-notification@1x.png`)} />
                  </div>
                  <div className="d-flex flex-column hannah-container">
                    <div className="hannah-statement">
                    "This app work's like magic. After a one-click install, my revenue started to grow regularly. Getting their daily performance email is now my favorite part of the day!"
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
      </React.Fragment>
    );
  }
}

export default Review;

