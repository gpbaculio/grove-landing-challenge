import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Container>
          <Row>
            <Col>
              <div className="footer-message">
                This material presented in this advertisement is for informational purposes only and should not be construed as investment advice. It is not a recommendation of, or an offer to sell or solicitation of an offer to buy, any particular security, strategy or investment product. Any analysis or discussion of investments, sectors or the market generally are based on current information, including from public sources, that we consider reliable, but we do not represent that any research or the information provided is accurate or complete, and it should not be relied on as such. Our views and opinions expressed in any online content are current at the time of publication and are subject to change.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;