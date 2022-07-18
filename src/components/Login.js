import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <input
          type='text'
          placeholder='Zip Code'
          value={zipcode}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} type='submit' className='submit_btn'>
            Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
