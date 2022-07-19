import React from 'react';
import DisplaySpaces from '../components/DisplaySpaces';


const DisplayContainer = (props) => {

    //Add logic to fill out location array from async call to receive locations from the database

    const { locations } = props;

    const locationArray = []; 
    for (let i = 0; i < locations.length; i++){
      //pass in response body into as props to display spaces
      locationArray.push(<DisplaySpaces key={locations[i]} resultObject={locations[i]} />);
    }
    //render search bar for zip code search and then resuls of the zip code search
    return(
      <div className="locations">
        {locationArray}
      </div>
    );
      
}

export default DisplayContainer; 
 