import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const displaySpaces = (props) => {
  
//display information received in the result body 
//from the databse query to locations

  return(
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

    <div className="LocationDisplay">
      <h4>Name: {props.data.}</h4>
      <h4>Address: {props.data.}</h4>
      <h4>Overall Rating: {props.data}</h4>
      <h4>Wifi:{props.data.}</h4>
      <h4>Type:{props.data.}</h4>
      <h4>Noise level:{props.data.}</h4>
      <h4>Outlets{props.data.}</h4>
      <h4>Time limit:{props.data.}</h4>
      <h4>Laptop Restrictions:{props.data.}</h4>
      <h4>Busy:{props.data.}</h4>
      <h4>Outdoor Seating:{props.data.}</h4>
      <h4>Pet friendly:{props.data.}</h4>
      <h4>Food rating:{props.data.}</h4>
      <h4>Coffee rating:{props.data.}</h4>
      <h4>Seating:{props.data.}</h4>
    </div>
    </>
  );
};

export default displaySpaces;