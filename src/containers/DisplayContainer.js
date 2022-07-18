import React, { useState } from 'react';
import axios from 'axios';
import DisplaySpaces from '../components/DisplaySpaces';


const DisplayContainer = (props) => {

    // componentDidUpdate() {
    //     axios.get(`/workspace/${this.state.search})
    //       .then(result => {this.setState({locations: result});})
    //       //error handling
    //       .catch(error => {console.log('Error:', error);});
        
    //   }

    //Add logic to fill out location array from async call to receive locations from the database

    console.log("props:",props)

    const locationArray = []; 
    for (let i = 0; i < props.locations.length; i++){
      //pass in response body into as props to display spaces
      locationArray.push(<DisplaySpaces key={props.locations[i]} resultObject={props.locations[i]} />);
    }
    //render search bar for zip code search and then resuls of the zip code search
    return(
      <div className="locations">
        {locationArray}
      </div>
    );
      
}

export default DisplayContainer; 
 