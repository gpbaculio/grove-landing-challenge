import React, { Component } from 'react';
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Nav,
  NavLink,
  Navbar,
} from 'reactstrap';

class NavbarHeader extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleLogout() {
    // const { history } = this.props;
    // localStorage.removeItem('token');
    // history.push('/signin');
    console.log('logged out!');
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="px-0">
          <NavbarBrand href="/"><img width="180" height="39" src={require(`../img/logo-growtiger@1x.png`)} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/pricing" className="px-5 nav-link text-center">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="px-5 nav-link text-center" to="/product">Product</NavLink>
              </NavItem>
              <NavItem className="text-center">
                <Button className="btn-sign-up">
                  SIGN UP FOR FREE
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHeader;
