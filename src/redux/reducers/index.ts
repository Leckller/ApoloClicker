import { combineReducers } from 'redux';
import ClickerReducer from './ClickerReducer';
import LojasReducer from './LojasReducer';
import timerReducer from './TimerReducer';

export const rootReducers = combineReducers({
  ClickerReducer,
  LojasReducer,
  timerReducer,
});
