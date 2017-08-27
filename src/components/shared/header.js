import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';


class Header extends Component {
  componentWillMount() {
    if (this.props.user.authenticated) {
      this.props.fetchUser();
    }
  }
  renderAuth(authenticated) {
    if (authenticated) {
      return [
        <LinkContainer to="/auth/sign_out" key="sign_out">
          <NavItem>Sign Out</NavItem>
        </LinkContainer>
        ,
        <NavItem key="profile">{ this.props.user.data ? this.props.user.data.name : '' }</NavItem>
      ];
    } else {
      return [
        <LinkContainer to="/auth/sign_in" key="sign_in">
          <NavItem>Sign In</NavItem>
        </LinkContainer>
        ,
        <LinkContainer to="/auth/sign_up" key="sign_up">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      ];
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect className="navbar-customize">
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
            { this.renderAuth(this.props.user.authenticated) }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(Header);
