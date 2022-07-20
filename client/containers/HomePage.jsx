// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
//import { connect } from 'react-redux';
import React, { useState } from 'react';
import axios from 'axios';
import WorkspaceContainer from './WorkspaceContainer.jsx';
//import * as actions from '../actions';
import searchIcon from '../assets/search.png';

const HomePage = () => {
  // removing this functionality to go into our workspace endpoint

  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState('');

  // // let locationsLoaded = false;

  // // hanles event of clicking button for zip code search
  const handleZipcodeSearch = () => {
    // event.preventDefault();
    axios.get(`/workspace/${search}`) // should be a POST request??
    .then((res) => {
      setLocations(res.data)
      // locationsLoaded = true;
    })
    .catch((error) => {
      console.error(`Couldn\'t fetch workspaces handleZipcodeSearch in HomePage, error: ${error}`);
    });
  }

  return (
    <>
      <div className="searchForm">
        <input type="text" placeholder="Search for a cafe or zipcode..." className="search-field" onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleZipcodeSearch} type="submit" className="search-button">
        <img src = {searchIcon}/>
        </button>
      </div>
      <div className="appDescription">
        <p>Looking for a place to work or study remotely? <br></br> 
        <br></br>Use CafeQuery to search for a specific cafe, restaurant, or bar to see reviews from other remote workers. <br></br><br></br> You can also look up your zipcode to find workspaces near you!</p>
      </div>

      {/* removing this to place into workspace endpoint */}
      <WorkspaceContainer workspaces={locations}/>
    </>
  );
}

export default HomePage;
