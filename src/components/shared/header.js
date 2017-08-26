import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  renderAuth(authenticated) {
    console.log(authenticated)
    if (authenticated) {
      return (
        <NavItem key="sign_out" eventKey={3}><Link to='/auth/sign_out'>Sign Out</Link></NavItem>
      );
    } else {
      return [
        <NavItem key="sign_in" eventKey={1}><Link to='/auth/sign_in'>Sign In</Link></NavItem>,
        <NavItem key="sign_up" eventKey={2}><Link to='/auth/sign_up'>Sign Up</Link></NavItem>
      ];
    }
  }
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Memoria</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            { this.renderAuth(this.props.auth.authenticated) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.auth)
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);
