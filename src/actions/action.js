
// import actionType constants by type
import axios from 'axios';
import * as types from '../constants/actionTypes';


//functions to be used in dispatch
export const addWorkSpace = workSpaceInfo => dispatch => {
  axios.post(`localhost:3000/workspace`)
  .then((workSpaceInfo) => {
    dispatch({
      type: types.ADD_SPACE,
      payload: workSpaceInfo})
  })
  .catch(err => {console.log(err)});
};


export const updateWorkSpace = workSpaceInfo => ({
  type: types.UPDATE_SPACE,
  payload: workSpaceInfo
});


export const deleteWorkSpace = spaceId => ({
  type: types.DELETE_CARD,
  payload: spaceId
});


export const findWorkSpace = location => ({
  type: types.FIND_SPACE,
  payload: location
});

