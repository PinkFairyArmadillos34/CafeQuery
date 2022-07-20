import React from 'react';

const Workspace = (props) => {
  //display information received in the result body 
  //from the databse query to locations

  const { workspaceName, address, rating, wifi, type, quiet, outlets, timeLimit, laptopRestrictions, crowded,
  outdoorSeating, petFriendly, foodRating, coffeeRating, seating} = props.resultObject;

  console.log(props.resultObject);

  return(
    <>
      <div className="LocationDisplay">
        <h4>Name: {workspaceName}</h4> <br></br>
        <h4>Address: {address}</h4><br></br>
        <h4>Overall Rating: {rating}</h4><br></br>
        <h4>Wifi: {wifi}</h4><br></br>
        <h4>Type: {type}</h4><br></br>
        <h4>Noise level: {quiet}</h4><br></br>
        <h4>Outlets: {outlets}</h4><br></br>
        <h4>Time limit: {timeLimit}</h4><br></br>
        <h4>Laptop Restrictions: {laptopRestrictions}</h4><br></br>
        <h4>Busy: {crowded}</h4><br></br>
        <h4>Outdoor Seating: {outdoorSeating}</h4><br></br>
        <h4>Pet friendly: {petFriendly}</h4><br></br>
        <h4>Food rating: {foodRating}</h4><br></br>
        <h4>Coffee rating: {coffeeRating}</h4><br></br>
        <h4>Seating: {seating}</h4><br></br>
      </div>
    </>
  );
};

export default Workspace;