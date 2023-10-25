import { AnyAction } from 'redux';
import { TIMER_ACTION } from '../actions/TimerAction';

const InitialState = {
  timer: 0,
};

const timerReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case TIMER_ACTION: {
      return {
        ...state,
        timer: action.payload,
      };
    }
    default: return {
      ...state,
    };
  }
};

export default timerReducer;
