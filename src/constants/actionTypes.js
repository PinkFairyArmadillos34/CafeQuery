/**
 * contains all the list that can be triggered in our files
 * the reason for that is because dispatch will not through an error if we mispell the action in state
 * it will be really hard to debug. If we instead pass a variable we will get an error
 */

// add action type constants i.e.:
export const ADD_SPACE = "ADD_SPACE";
export const UPDATE_SPACE= "UPDATE_SPACE";
export const DELETE_SPACE = "DELETE_SPACE";
export const FIND_SPACE = "FIND_SPACE";