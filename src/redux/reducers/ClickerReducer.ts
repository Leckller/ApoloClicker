import { AnyAction } from 'redux';
import { BUY_ITEM, CLICK_DEDE, LEVEL_UP, SELL_ITEM } from '../actions/ClickDedeAction';
import { ItensType } from '../../types';

const key = 'Clicker';
const local = JSON.parse(localStorage.getItem(key) as string);

const InitialState = {
  Clicks: localStorage.getItem(key) ? local.Clicks : 0,
  Dinheiro: localStorage.getItem(key) ? local.Dinheiro : 0,
  mX: localStorage.getItem(key) ? local.mX : 0.2,
  dX: localStorage.getItem(key) ? local.dX : 1,
  Itens: localStorage.getItem(key) ? local.Itens : [],
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
    case BUY_ITEM: {
      if (state.Itens.some((e: ItensType) => e.name === action.payload.item.name)) {
        // previne a repetição de compra nos itens
        // eslint-disable-next-line no-alert
        alert('Você já possui este item!');
        return {
          ...state,
        };
      }
      return {
        ...state,
        Itens: [...state.Itens, action.payload.item],
        Dinheiro: state.Dinheiro - action.payload.item.preco,
        mX: state.mX + action.payload.item.mX,
        dX: state.dX + action.payload.item.dX,
      };
    }
    case LEVEL_UP: {
      return {
        ...state,
      };
    }
    case SELL_ITEM: {
      return { ...state,
        Itens: state.Itens
          .filter((e: ItensType) => e !== action.payload.item),
        Dinheiro: state.Dinheiro + action.payload.value,
        dX: state.dX - action.payload.dX,
        mX: state.mX - action.payload.mX,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default ClickerReducer;
