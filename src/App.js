
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceReview from './components/AddSpaceReview';
import DisplayContainer from './containers/DisplayContainer';
import HomePage from './containers/HomePage';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App()  {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<App />}></Route>
              <Route index element ={< HomePage />}></Route>
              <Route path='display' element ={< DisplayContainer />}></Route>
              <Route path='add' element ={< AddSpaceReview />}></Route>
              <Route path='login' element ={<Login />}></Route>
          </Routes>
        </Router>
   
    );
};


export default App;
