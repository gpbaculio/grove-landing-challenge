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
          <NavbarBrand href="/">
            <img
              width="90"
              className="nav-logo-img"
              height="30"
              src={require(`../img/logo.svg`)}
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navbar-container d-flex align-items-center" navbar>
              <NavItem>
                <NavLink className="nav-link ml-3 text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    About us
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link ml-3 text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    Pricing
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link ml-3 text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    Our Advisors
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link ml-3 text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    FAQ
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link ml-3 text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    Free Checkup
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    <span className="sign-in pl-4">Sign in</span>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-center">
                  <Link className="nav-link text-center" to="/about-us">
                    <Button className="get-started"> Get Started </Button>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarHeader;
