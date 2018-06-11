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
import { Link } from 'react-router-dom';

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
        <Navbar color="light" light expand="lg" className="px-0 mt-4 d-flex align-items-center">
          <NavbarBrand href="/"><img width="180" height="39" src={require(`../img/logo-growtiger@1x.png`)} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
              <NavItem>
                <NavLink className="nav-link pricing text-center"><Link to="/pricing">Pricing</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-center"><Link to="/product">Product</Link></NavLink>
              </NavItem>
              <NavItem className="text-center">
                <Button className="btn-sign-up-nav">
                  <span className="btn-sign-up-nav-text">Sign Up For Free</span>
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
