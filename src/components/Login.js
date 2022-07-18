import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div className='login'>
      <form className='login_form'>
        <h1>Login Here</h1>
        <input
          type='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='submit_btn'>
            Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
