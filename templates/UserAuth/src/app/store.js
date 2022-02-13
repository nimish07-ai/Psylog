import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthSlice from '../features/UserAuth/AuthSlicer';
import RecordSlice from "../features/Records/RecordSlicer";

export const store = configureStore({
  reducer: {
    Record:RecordSlice,
    Auth: AuthSlice,


  },
});
