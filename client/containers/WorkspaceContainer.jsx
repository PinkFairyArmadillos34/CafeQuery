import React, { useState } from 'react';
import Workspace from '../components/Workspace.jsx';


const WorkspaceContainer = (props) => {
  const { workspaces } = props;

  const locationArray = []; 
  for (let i = 0; i < workspaces.length; i++){
    //pass in response body into as props to display spaces
    locationArray.push(<Workspace key={workspaces[i]} resultObject={workspaces[i]} />);
  }
  //render search bar for zip code search and then resuls of the zip code search
  return(
    <div className="workspaces">
      {locationArray}
    </div>
  );     
}

export default WorkspaceContainer; 
 