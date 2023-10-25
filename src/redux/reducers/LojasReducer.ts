import { AnyAction } from 'redux';
import { SET_APOLO, SET_CONFIG, SET_LOJA } from '../actions/LojasAction';

const initialState = {
  loja: false,
  apolo: false,
  config: false,
};

const LojasReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOJA: {
      return {
        ...state,
        loja: !state.loja,
      };
    }
    case SET_APOLO: {
      return {
        ...state,
        apolo: (!state.apolo),
      };
    }
    case SET_CONFIG: {
      return {
        ...state,
        config: (!state.config),
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
