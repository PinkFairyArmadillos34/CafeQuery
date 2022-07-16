/*
this file: 
(1) collects redux reducer logic and actions for set/clear message, 
(2) updates message state when message action is dispatched from anywhere in app, 
(3) exports setMessage/clearmessage action creators. 
*/

import { createSlice } from '@reduxjs/toolkit';
const initialState = {};
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: '' };
    },
  },
});

const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions;
export default reducer;
