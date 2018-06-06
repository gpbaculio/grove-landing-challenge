import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import withFullWidthNoHeader from '../../../components/withFullWidthNoHeader';
import ArrowForward from 'react-icons/lib/io/android-arrow-forward';

class Launch extends Component {
  render() {
    return (
      <Row>
        <Col className="px-0 m-auto">
          <div className="d-flex flex-column launch-container justify-content-cente">
            <div className="launch-header">
              Launch your social proof widget in under 1 minute <ArrowForward size={20}/>
            </div>
            <div className="d-flex launch-body">
              <div className="d-flex flex-column launch-left">
                <div className="lf-header">
                  Do I need to know how to code?
                </div>
                <div className="lf-body">
                  Nope! Launch and manage your next social proof campaign in under a minute, no coding required. See for yourself! <span role="img" aria-labelledby="point-down">👇</span>
                </div>
                <div className="lf-footer">
                  Launch your social proof widget in under 1 minute <ArrowForward size={20}/>
                </div>
              </div>
              <div className="launch-right d-flex flex-column justify-content-center m-auto">
                <img alt="" className="how-img d-block m-auto" src={require(`../../../img/How@1x.png`)} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default withFullWidthNoHeader(Launch);

