import { AnyAction } from 'redux';
import { CLICK_DEDE } from '../actions/ClickDedeAction';

const key = 'Clicker';
const local = JSON.parse(localStorage.getItem(key) as string);

const InitialState = {
  Clicks: local.Clicks,
  Dinheiro: local.Dinheiro,
};

const ClickerReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case CLICK_DEDE: {
      const actState = { ...state };
      localStorage.setItem(key, JSON.stringify(actState));
      return { ...state,
        Clicks: state.Clicks + 1,
        Dinheiro: action.payload.x + state.Dinheiro };
    }
    default: {
      return { ...state };
    }
  }
};

export default ClickerReducer;
