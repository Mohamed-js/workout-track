import { combineReducers } from 'redux';
import movementsReducer from './movementsReducer';

const reducers = combineReducers({
  movements: movementsReducer,
});

export default reducers;
