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
import FaBars from 'react-icons/lib/fa/bars';
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
        <Navbar dark expand="lg" className="navbar-parent d-flex align-items-center">
          <NavbarBrand href="/"><img width="180" className="nav-logo-img" height="39" src={require(`../img/logo@1x.png`)} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-container justify-content-between d-flex align-items-center" navbar>
              <div className="d-flex nav-left">
                <NavItem>
                  <NavLink className="nav-link text-center">
                    <Link className="nav-link text-center" to="/pricing">
                      Home
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link text-center">
                    <Link className="nav-link text-center" to="/product">
                      Dashboard
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem className="text-center">
                  <NavLink className="nav-link text-center">
                    <Link className="nav-link text-center" to="/product">
                      Blog
                    </Link>
                  </NavLink>
                </NavItem>
              </div>
              <div className="d-flex align-items-center nav-right">
                <NavItem>
                  <NavLink className="nav-link text-center">
                    <Link className="nav-link text-center" to="/product">
                      Get Priority Access
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem className="text-center">
                  <NavLink className="nav-link text-center">
                    <Link className="nav-link text-center" to="/product">
                      <Button className="nav-login">
                        Login
                      </Button>
                    </Link>
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarHeader;
