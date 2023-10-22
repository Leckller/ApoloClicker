/* eslint-disable react-func/max-lines-per-function */
/* eslint-disable no-alert */
import { AnyAction } from 'redux';
import { AUTO_CLICK, BUY_ITEM, CLICK_DEDE, LEVEL_UP,
  SELL_ITEM } from '../actions/ClickDedeAction';
import { ItensType } from '../../types';

const key = 'Clicker';
const local = JSON.parse(localStorage.getItem(key) as string);

const InitialState = {
  Clicks: localStorage.getItem(key) ? local.Clicks : 0,
  Dinheiro: localStorage.getItem(key) ? local.Dinheiro : 0,
  mX: localStorage.getItem(key) ? local.mX : 0.2,
  dX: localStorage.getItem(key) ? local.dX : 1,
  Itens: localStorage.getItem(key) ? local.Itens : [],
  DinheiroPassivo: 0,
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
    case AUTO_CLICK: {
      if (state.DinheiroPassivo !== action.payload.x) {
        return { ...state,
          DinheiroPassivo: action.payload.x,
        };
      }
      return {
        ...state,
        DinheiroPassivo: state.DinheiroPassivo + action.payload.x,
        Dinheiro: state.Dinheiro + state.DinheiroPassivo,
      };
    }
    case BUY_ITEM: {
      if (state.Itens.some((e: ItensType) => e.name === action.payload.item.name)) {
        alert('Você já possui este item!');
        return { ...state };
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
        mX: state.mX - action.payload.mX * (action.payload.level - 1)
        + action.payload.mX * action.payload.level,
        dX: state.dX - action.payload.dX * (action.payload.level - 1)
        + action.payload.dX * action.payload.level,
        Dinheiro: state.Dinheiro - (action.payload.preco
         + (action.payload.preco / 2) * action.payload.level),
        Itens: [...state.Itens.filter((e:ItensType) => e !== action.payload), {
          ...action.payload, level: action.payload.level + 1,
        }],
      };
    }
    case SELL_ITEM: {
      return { ...state,
        Itens: [...state.Itens
          .filter((e: ItensType) => e !== action.payload.item)],
        Dinheiro: state.Dinheiro + action.payload.value,
        dX: state.dX - (action.payload.item.dX * action.payload.item.level),
        mX: state.mX - (action.payload.item.mX * action.payload.item.level),
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default ClickerReducer;
