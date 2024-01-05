/* eslint-disable react-func/max-lines-per-function */
import { AnyAction } from 'redux';
import { SET_APOLO, SET_CONFIG,
  SET_LOJA, SET_MENU, SET_STATS } from '../actions/LojasAction';

const initialState = {
  loja: false,
  apolo: false,
  config: false,
  stats: false,
  menu: false,
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
        menu: false,
      };
    }
    case SET_APOLO: {
      return {
        ...state,
        loja: false,
        apolo: !state.apolo,
        config: false,
        stats: false,
        menu: false,
      };
    }
    case SET_CONFIG: {
      return {
        ...state,
        loja: false,
        apolo: false,
        config: !state.config,
        stats: false,
        menu: false,
      };
    }
    case SET_STATS: {
      return {
        ...state,
        loja: false,
        apolo: false,
        config: false,
        stats: !state.stats,
        menu: false,
      };
    }
    case SET_MENU: {
      return {
        ...state,
        loja: false,
        apolo: false,
        config: false,
        stats: false,
        menu: !state.menu,
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
