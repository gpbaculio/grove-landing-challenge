import React from 'react';
import PropTypes from 'prop-types';

const SidebarRight = props => (
  <div className="wrapper">
    {props.children}
  </div>
);

SidebarRight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default SidebarRight;
