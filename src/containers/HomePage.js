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
            <img src="./containers/option1.png" className="icon" alt=""/>
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
        <input type="search" placeholder="Search for a cafe or zipcode..." className="search-field" />
        <button type="submit" className="search-button">
          <img src="search.png"/>
        </button>
      </div>

      <div className="appDescription">
        <p>Looking for a place to work or study remotely? <br></br> 
        <br></br>Use CafeQuery to search for a specific cafe, restaurant, or bar to see reviews from other remote workers. <br></br><br></br> You can also look up your zipcode to find workspaces near you!</p>
      </div>
              </>
        );

}
}

export default HomePage;
