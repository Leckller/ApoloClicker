import { combineReducers } from 'redux';
import ClickerReducer from './ClickerReducer';
import LojasReducer from './LojasReducer';
import timerReducer from './TimerReducer';

export const rootReducers = combineReducers({
  LojasReducer,
  timerReducer,
  ClickerReducer,
});
