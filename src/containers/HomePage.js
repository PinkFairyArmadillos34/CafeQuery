// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
//import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import DisplayContainer from './DisplayContainer';
import axios from 'axios';

//import * as actions from '../actions';

const HomePage = () => {

  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState('');

  let locationsLoaded = false;

  // hanles event of clicking button for zip code search
  const handleAddZipcode = (event) => {
    // prevents page reload
    // event.preventDefault();

    axios.get(`/workspace/${search}`)
    .then(res => {
      console.log('this is result', res.data);
    //   console.log(locationsLoaded);
      setLocations(res.data)
      locationsLoaded = true;
      console.log('this is the updated location array', locations);
      
  })
    //error handling
    .catch(error => {console.log('Error:', error);});
  }

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
              <input type="text" placeholder="Search" className="search-field" onChange={(e) => setSearch(e.target.value)}/>
              <button onClick={handleAddZipcode} type="submit" className="search-button">
              <img src="search.png"/>
              </button>
          </div>
          <DisplayContainer locations={locations}/>
        {/* <div>
          {
            locationsLoaded
              ? <DisplayContainer locations={locations}/>
              : <div className="searchForm">
              <input type="text" placeholder="Search" className="search-field" onChange={(e) => setSearch(e.target.value)}/>
              <button onClick={handleAddZipcode} type="submit" className="search-button">
              <img src="search.png"/>
              </button>
            </div> 
          }
        </div> */}
      </>
  );
    
}

export default HomePage;
