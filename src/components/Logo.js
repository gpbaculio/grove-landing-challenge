import React from 'react';
// import PropTypes from 'prop-types';

const Logo = () => (
  <div className="text-center mb-4">
    <img src={`${process.env.PUBLIC_URL}/logo@1x.png`} alt="logo" />
    <h4 style={{ marginTop: '-.75rem' }}>ListProof</h4>
  </div>
);

Logo.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Logo;
