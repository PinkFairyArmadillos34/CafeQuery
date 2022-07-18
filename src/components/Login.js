import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //add axios call to check user credentials against db on click of submit
  const handleLogin = (event) => {
    // prevent page reload
    event.preventDefault();

    const loginObj = {
      username: username,
      password: password,
    };

    axios
      .get(`/user/${username}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          type='email'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} type='submit' className='submit_btn'>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
