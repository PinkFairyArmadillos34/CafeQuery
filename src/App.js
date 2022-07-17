
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceReview from './components/AddSpaceReview';
//import DisplayContainer from './containers/DisplayContainer';
import HomePage from './containers/HomePage';
import Login from "./components/Login";

function App()  {
    return (
      // <div>
      //   <a>hihi</a>
      //   <Login />
      // </div>
      <> 
        <Router>
          <Routes>
            <Route exact path='/' component ={HomePage} />
            <Route exact path='/display' component ={DisplayContainer} />
            <Route exact path= '/add' component ={AddSpaceReview} />
            <Route exact path= '/logIn' component ={Login} />
            {/*If any route mismatches the upper route endpoints then redirect triggers and redirects
            app to home component*/}
            <Redirect to='/' />
          </Routes>
        </Router>
       </>
   
    );
}


export default App;
