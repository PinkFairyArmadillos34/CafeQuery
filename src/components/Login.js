import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');

  // onclick function to send post request to server
  // if login is successful, do we need to add a cookie to local storage?
  // on signup, do we need to create and store a cookie for the user?
  const handleLogin = (event) => {
    let exists = false; 

    const loginInput = {
      "username": username,
      "password": password,
      "zipcode": zipcode
    }

    if (!exists) {
      
    }
    
    // if user exists, 
    if (exists) {
      axios.post('/user', loginInput)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }

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
