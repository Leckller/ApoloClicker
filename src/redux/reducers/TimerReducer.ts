import { AnyAction } from 'redux';
import { MONEY_GAP, TIMER_ACTION } from '../actions/TimerAction';

const InitialState = {
  dias: 0,
  timerEnd: false,
  seconds: 0,
  minutes: 0,
  inicio: 0,
  historico: [],
};

const timerReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case TIMER_ACTION: {
      if (state.minutes === 8) {
        return {
          ...state,
          timerEnd: true,
          dias: state.dias + 1,
          minutes: 0,
          seconds: 0,
        };
      }
      if (state.minutes === 0 && state.seconds === 1) {
        return {
          ...state,
          timerEnd: false,
          seconds: state.seconds + 1,
          inicio: action.payload,
        };
      }
      return {
        ...state,
        minutes: state.seconds === 60 ? state.minutes + 1 : state.minutes,
        seconds: state.seconds >= 60 ? 0 : state.seconds + 1,
      };
    }
    case MONEY_GAP: {
      return {
        ...state,
        historico: [...state.historico, action.payload - state.inicio]
          .filter((e:number) => e !== 0),
      };
    }
    default: return {
      ...state,
    };
  }
};

export default timerReducer;
