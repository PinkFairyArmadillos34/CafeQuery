
 import { createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './reducers/index';
 
 // We now have access to the index file
 // the function will trigger and run all of the reducers
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 const store = createStore(
   // invoke store and pass createstore
   // gathers results to a single state object
   reducers,
   composeWithDevTools()
 );
 
 
 export default store;