import React, {Component} from 'react';
import axios from 'axios';
class DisplayContainer extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
            locations: []
        }
        this.handleAddZipcode = this.handleAddZipcode.bind(this);
    }
    handleAddZipcode(){
        axios.get(`/workspace/${this.state.search}`)
        .then(result => {setState(this.state.locations = result)})
        //error handling
        .catch(error => {console.log('Error:', error);});
    }

    // componentDidUpdate() {
    //     axios.get(`/workspace/${this.state.search})
    //       .then(result => {this.setState({locations: result});})
    //       //error handling
    //       .catch(error => {console.log('Error:', error);});
        
    //   }

    //Add logic to fill out location array from async call to receive locations from the database

    render() {
        const locationArray = [];
        for (let i = 0; i < this.state.locations.length; i++){
         //pass in response body into as props to display spaces
          locationArray.push(<DisplaySpaces key ={this.state.locations[i]} resultObject ={this.state.locations[i]} />);
        }
        //render search bar for zip code search and then resuls of the zip code search
        return(
            <div className="locations">
            <input type="text" placeholder='Enter zipcode' onChange={(e) => setState(this.state.search= e.target.value)} />
            <button onClick={this.handleAddZipcode} type='submit' className='submit_btn'>
                Submit
            </button>
            {locationArray}
          </div>
        );
      }
}

export default DisplayContainer; 
 