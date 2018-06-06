import React from 'react';
import { Container } from 'reactstrap';
import Navbar from './Navbar';

function withFullWidth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <Navbar {...this.props} />
            <div className="fullWidth-wrapper m-auto">
              <WrappedComponent {...this.props} />
            </div>
          </Container>
          <style jsx="true">{`
            .fullWidth-wrapper {
              width: 100%;
              max-width: 1170px;
            }
          `}
          </style>
        </div>
      );
    }
  };
}

export default withFullWidth;
