// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
//import { connect } from 'react-redux';
import React, { useState } from 'react';
import DisplayContainer from './DisplayContainer';
import axios from 'axios';

//import * as actions from '../actions';

const HomePage = () => {

  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState('');

  // let locationsLoaded = false;

  // hanles event of clicking button for zip code search
  const handleAddZipcode = () => {
    // prevents page reload
    // event.preventDefault();

    axios.get(`/workspace/${search}`)
    .then(res => {
      console.log('this is result', res.data);
      setLocations(res.data)
      // locationsLoaded = true;
      console.log('this is the updated location array', locations);
    })
    //error handling
    .catch(error => {console.log('Error:', error);});
  }

  return (
    <>
      <div className="searchForm">
        <input type="text" placeholder="Search for a cafe or zipcode..." className="search-field" onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleAddZipcode} type="submit" className="search-button">
        <img src="../assets/search.png"/>
        </button>
      </div>
      <div className="appDescription">
        <p>Looking for a place to work or study remotely? <br></br> 
        <br></br>Use CafeQuery to search for a specific cafe, restaurant, or bar to see reviews from other remote workers. <br></br><br></br> You can also look up your zipcode to find workspaces near you!</p>
      </div>
      <DisplayContainer locations={locations}/>
    </>
  );
}

export default HomePage;
