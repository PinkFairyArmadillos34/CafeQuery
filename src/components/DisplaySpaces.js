import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const DisplaySpaces = (props) => {
  
//display information received in the result body 
//from the databse query to locations

  return(
//     <>
//     <Navbar className="navbar" expand="lg">
//             <LinkContainer to="/">
//   <Navbar.Brand>CafeQuery</Navbar.Brand>
  
//   </LinkContainer>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="homepage">
//     <LinkContainer to="/">
//       <Nav.Link>Find A Location</Nav.Link>
//       </LinkContainer>

//       <LinkContainer to="/add">
//       <Nav.Link>Add a Location</Nav.Link>
//       </LinkContainer>

//       <LinkContainer to="/logIn">
//       <Nav.Link>Log In/Sign Up</Nav.Link>
//       </LinkContainer>
     
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
<>
    <div className="LocationDisplay">
      <h4>Name: {props.resultObject.workspaceName}</h4>
      <h4>Address: {props.resultObject.address}</h4>
      <h4>Overall Rating: {props.resultObject.rating}</h4>
      <h4>Wifi:{props.resultObject.wifi}</h4>
      <h4>Type:{props.resultObject.type}</h4>
      <h4>Noise level:{props.resultObject.quiet}</h4>
      <h4>Outlets: {props.resultObject.outlets}</h4>
      <h4>Time limit:{props.resultObject.timeLimit}</h4>
      <h4>Laptop Restrictions:{props.resultObject.laptopRestrictions}</h4>
      <h4>Busy:{props.resultObject.crowded}</h4>
      <h4>Outdoor Seating:{props.resultObject.outdoorSeating}</h4>
      <h4>Pet friendly:{props.resultObject.petFriendly}</h4>
      <h4>Food rating:{props.resultObject.foodRating}</h4>
      <h4>Coffee rating:{props.resultObject.coffeeRating}</h4>
      <h4>Seating:{props.resultObject.seating}</h4>
    </div>
    </>
  );
};

export default DisplaySpaces;