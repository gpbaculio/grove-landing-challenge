import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import withFullWidth from '../../components/withFullWidth';

class Product extends Component {
  render() {
    return (
      <Row>
        <Col>
            Product
        </Col>
      </Row>
    );
  }
}

export default withFullWidth(Product);
