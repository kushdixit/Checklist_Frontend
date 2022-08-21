import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from 'redux/reducers/index';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
//   whitelist: [
//   ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
);

const persistor = persistStore(store);

export { store, persistor };
