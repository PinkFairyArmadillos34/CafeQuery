
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
        <Router>
          <Routes>
            <Route path='/' element={<App />}></Route>
              <Route index element ={< HomePage />}></Route>
              <Route path='display' element ={< DisplayContainer />}></Route>
              <Route path= 'add' element ={< AddSpaceReview />}></Route>
              <Route path= 'logIn' element ={< Login />}></Route>
          </Routes>
        </Router>
   
    );
};


export default App;
