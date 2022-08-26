import {configureStore} from "@reduxjs/toolkit";
import rootReducer from 'redux/reducers/index';

const store = configureStore({
  reducer: rootReducer
})

export { store };