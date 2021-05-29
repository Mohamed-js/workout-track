import { combineReducers } from 'redux';
import movementsReducer from './movementsReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  untrackedMovements: movementsReducer,
  user: userReducer,
});

export default reducers;
