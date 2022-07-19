
 import { createStore, applyMiddleware} from 'redux';
 import thunkMiddleware from 'redux-thunk';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './reducers/index';
 // adding middleware and specifically built in thunk to make
 // calls to make redux asynchrounous. 
 const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

 
 // We now have access to the index file
 // the function will trigger and run all of the reducers
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 const store = createStore(
   // invoke store and pass createstore
   // gathers results to a single state object
   reducers,
   composedEnhancer
 );
 
 export default store; 
