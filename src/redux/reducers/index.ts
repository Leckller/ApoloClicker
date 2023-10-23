import { combineReducers } from 'redux';
import ClickerReducer from './ClickerReducer';
import LojasReducer from './LojasReducer';

export const rootReducers = combineReducers({
  ClickerReducer,
  LojasReducer,
});
