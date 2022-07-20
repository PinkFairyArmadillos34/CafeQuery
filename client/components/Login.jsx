import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');

  // onclick function to send post request to server
  // if login is successful, do we need to add a cookie to local storage?
  // on signup, do we need to create and store a cookie for the user?
  // add axios call to check user credentials against db on click of submit
  const handleLogin = (event) => {
    // prevent page reload
    event.preventDefault();

    // boolean to see if user is found
    // let found = false;
    
    const loginObj = {
      username: username,
      password: password,
    };
    
    // should be a POST to endpoint to check SQL server if username exists
    axios.get(`/user/${username}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='login'>
        <div><h7>Log In</h7></div>
        <form className='login_form'>
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
          <input
            type='text'
            placeholder='Zip Code'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <button onClick={handleLogin} type='submit' className='submit_btn'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
