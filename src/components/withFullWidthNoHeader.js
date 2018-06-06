import React from 'react';
import { Container } from 'reactstrap';

function withFullWidth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <div className="fullWidthNoHeader-wrapper m-auto">
              <WrappedComponent {...this.props} />
            </div>
          </Container>
          <style jsx="true">{`
            .fullWidthNoHeader-wrapper {
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
