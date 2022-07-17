import { connect } from 'react-redux';
import React from 'react';
//import * as actions from '../actions';

class DisplayContainer extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
            locations: []
        }
    }

    componentDidUpdate() {
        fetch(//query database based on zip code entered)
          .then(response => response.json())
          .then(result => {this.setState({locations: result});})
          //error handling
          .catch(error => {console.log('Error:', error);});
        
      }

    //Add logic to fill out location array from async call to receive locations from the database

    render() {
        const locationArray = [];
        for (let i = 0; i < this.state.locations.length; i++){
         //pass in response body into as props to display spaces
          locationArray.push(<DisplaySpaces key ={this.state.locations[i]} locationID = {i} />);
        }
        //render search bar for zip code search and then resuls of the zip code search
        return(
            <div className="locations">
            <input type="text" placeholder='Enter zipcode' onChange={(e) => setState(this.state.search= target.value)} />
            <DisplaySpaces />
          </div>
        );
      }
    }

 