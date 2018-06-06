import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import IoAndroidMoreVertical from 'react-icons/lib/io/android-more-vertical';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="link" className="p-0 d-inline-flex align-items-center">
          <IoAndroidMoreVertical size={20} />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={this.props.onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

Dropdown.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
