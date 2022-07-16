import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import accountReducer from './reducers/account';
import motorcycleReducer from './reducers/motorcycle';
import usersReducer from './reducers/users';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account'],
};

const reducers = combineReducers({
  account: accountReducer,
  users: usersReducer,
  motorcycles: motorcycleReducer,
});

const PersistReducer = persistReducer(persistConfig, reducers);

export default PersistReducer;
