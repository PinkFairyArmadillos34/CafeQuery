
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceReview from './components/AddSpaceReview';
import DisplaySpaces from './components/DisplaySpaces';
import HomePage from './components/HomePage';

import Login from "./components/Login";

function App()  {
    return (
      <div>
        <a>hihi</a>
        <Login />
      </div>
      
    //  <Router>
    //   <nav className = "navbar">
    //     <div className="navbar-nav">
    //     <li className="nav-item>">
    //         <Link to={"/"} className ="nav-link">
    //           Home Page
    //         </Link>
    //       </li>
    //       <li className="nav-item>">
    //         <Link to={"/display"} className ="nav-link">
    //           Locations
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to={"/add"} className="nav-link">
    //           Add a location
    //         </Link>
    //       </li>
    //     </div>
    //   </nav>
    //   <div className="container mt-3">
    //     <Routes>
    //       <Route exact path="/" component={HomePage} />
    //       <Route exact path="/display" component={DisplaySpaces} />
    //       <Route exact path="/add" component={AddSpaceReview} />
    //     </Routes>
    //   </div>
    //  </Router>
    );
}


export default App;
