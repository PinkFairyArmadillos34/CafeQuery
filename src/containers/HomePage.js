// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
//import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


//import * as actions from '../actions';

class HomePage extends Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <>
            <Navbar className="navbar" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>CafeQuery</Navbar.Brand>
  
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="homepage">
    <LinkContainer to="/">
      <Nav.Link>Find A Location</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/add">
      <Nav.Link>Add a Location</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/logIn">
      <Nav.Link>Log In/Sign Up</Nav.Link>
      </LinkContainer>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>

<div className="searchForm">
        <input type="search" placeholder="Search" className="search-field" />
        <button type="submit" className="search-button">
          <img src="search.png"/>
        </button>
      </div>
              </>
        );

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <br />
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/display'>Find a location</Link>
          </li>
          <li>
            <Link to='/add'>Add a location</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
