
// import actionType constants by type
import * as types from '../constants/actionTypes';


//functions to be used in dispatch
export const addWorkSpace = workSpaceInfo => ({
  type: types.ADD_SPACE,
  payload: workSpaceInfo
});

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

