 import * as types from '../constants/actionTypes';
 // import {Map} from '../node_modules/immutable';
 const {Map} = require('immutable');
 
 // reduce does two things.
 // 1. intialize state
 // 2. return an update depending on the action
 const initialState = {

 };
 
 // setting a default parameter of state = initialState
 // workSpaceReducer is executed when dispatch is executed
 // the action creator dispatches an object to marketReducer
 
 const workSpaceReducer = (state = initialState, action) => {
   // checks action
   switch (action.type) {
     case types.ADD_SPACE: {
       // return updated state
       // remove the state so that it is not modified.
       // return only what is updated
       return {
         ...state
       };
     }

     case types.FIND_SPACE: {


      return {
        ...state
      };
     }
       
     case types.SET_NEW_LOCATION: {
       return {
         ...state,
         newLocation: action.payload
       }
     }
     
     case types.UPDATE_SPACE: { 
       
       return {
         ...state
       };
 
     }
 
     case types.DELETE_SPACE:  {      
       return {
         ...state,
       };      
     }
 
 
     // return state if no action is passed
     default: {
       return state;
     }
   }
 };
 
 export default workSpaceReducer;
 