// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/UserSlice';

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
