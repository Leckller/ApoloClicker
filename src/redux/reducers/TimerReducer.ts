import { AnyAction } from 'redux';
import { MONEY_GAP, TIMER_ACTION } from '../actions/TimerAction';

const key = 'Timer';
const local = JSON.parse(localStorage.getItem(key) as string);

const InitialState = {
  dias: localStorage.getItem(key) ? local.dias : 0,
  timerEnd: false,
  seconds: 0,
  minutes: 0,
  inicio: 0,
  historico: localStorage.getItem(key) ? local.historico : [],
};

const timerReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case TIMER_ACTION: {
      const actState = { ...state };
      localStorage.setItem(key, JSON.stringify(actState));
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
        historico: [...state.historico, Number((action.payload - state.inicio)
          .toFixed(2))]
          .filter((e:number) => e !== 0),
      };
    }
    default: return {
      ...state,
    };
  }
};

export default timerReducer;
