
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceReview from './components/AddSpaceReview.jsx';
import WorkspaceContainer from './containers/WorkspaceContainer.jsx';
import HomePage from './containers/HomePage.jsx';
import Login from './components/Login.jsx';
// import Signup from './components/Signup.jsx';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function App()  {
  return (
    <>
      <Router>        
        <Navbar className="navbar" expand="lg">
          <img src="./assets/option1.png" className="icon" alt=""/>
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

          <Routes>
          <Route path='/' element={<App />}></Route>
              <Route index element ={<HomePage />}></Route>
              <Route path='/add' element ={<AddSpaceReview />}></Route>
              <Route path='/login' element ={<Login />}></Route>

              {/* 
                Reviews implementation

              - Given no display endpoint, we will now display all workspaces 
                within a zipcode in our workspace endpoint
              <Route path='/workspaces' element ={<WorkspaceContainer />}></Route>
              */}
          </Routes>
      </Router>
    </>
  );
}


export default App;
