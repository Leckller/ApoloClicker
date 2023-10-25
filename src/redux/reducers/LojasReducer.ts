import { AnyAction } from 'redux';
import { SET_APOLO, SET_CONFIG, SET_LOJA, SET_STATS } from '../actions/LojasAction';

const initialState = {
  loja: false,
  apolo: false,
  config: false,
  stats: false,
};

const LojasReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOJA: {
      return {
        ...state,
        loja: !state.loja,
        apolo: false,
        config: false,
        stats: false,
      };
    }
    case SET_APOLO: {
      return {
        ...state,
        loja: false,
        apolo: !state.apolo,
        config: false,
        stats: false,
      };
    }
    case SET_CONFIG: {
      return {
        ...state,
        loja: false,
        apolo: false,
        config: !state.config,
        stats: false,
      };
    }
    case SET_STATS: {
      return {
        ...state,
        loja: false,
        apolo: false,
        config: false,
        stats: !state.stats,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default LojasReducer;
