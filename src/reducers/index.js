
// import combine reducer 
// need to combine all reducers in to an object
// this will then be used in the store.js
import { combineReducers } from 'redux';

// import all reducers here
import workSpaceReducer from './workSpaceReducer';


// combine reducers
const reducers = combineReducers({
  workspace: workSpaceReducer
});

// make the combined reducers available for import
export default reducers;

