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
  Container,
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
      <Container>
        <Navbar color="light" light expand="lg" className="px-0 mt-4 d-flex align-items-center">
          <NavbarBrand href="/"><img width="180" className="nav-logo-img" height="39" src={require(`../img/logo-growtiger@1x.png`)} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
              <NavItem>
                <NavLink className="nav-link pricing text-center">
                  <Link className="nav-link pricing text-center" to="/pricing">
                    Pricing
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-center">
                  <Link className="nav-link text-center" to="/product">
                    Product
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <Button className="signup-nav">
                  Sign Up For Free
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarHeader;
