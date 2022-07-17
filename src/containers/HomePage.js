// moved to containers section, per definition this will be the stateful component passing props to the others - Lyam
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <br />
                <ul>
                    <li>
                       <Link to='/logIn'>Login</Link>
                    </li>
                    <li>
                       <Link to='/display'>Find a location</Link>
                    </li>
                    <li>
                       <Link to='/add'>Add a location</Link>
                    </li>
                </ul>
            </div>
        );


    }
    
}

export default HomePage;
