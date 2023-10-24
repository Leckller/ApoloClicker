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
  Sprite: 1,
  DinheiroPassivo: 0,
  ProducaoCafe: localStorage.getItem(key) ? local.ProducaoCafe : 5,
  limiteCafe: localStorage.getItem(key) ? local.limiteCafe : 25,
  cafeAtual: localStorage.getItem(key) ? local.cafeAtual : 0,
  consumoCafe: localStorage.getItem(key) ? local.consumoCafe : 5,
  Itens: localStorage.getItem(key) ? local.Itens : [],
};

const ClickerReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case CLICK_DEDE: {
      const actState = { ...state };
      localStorage.setItem(key, JSON.stringify(actState));
      return { ...state,
        Clicks: state.Clicks + 1,
        Dinheiro: action.payload.x + state.Dinheiro,
        Sprite: state.Sprite === 1 ? 2 : 1 };
    }
    case AUTO_CLICK: {
      const { cafeAtual, limiteCafe, ProducaoCafe, consumoCafe } = state;
      if (state.DinheiroPassivo !== action.payload.x) {
        return { ...state,
          DinheiroPassivo: action.payload.x,
        };
      }
      if (cafeAtual <= 0 && consumoCafe > ProducaoCafe) {
        return {
          ...state,
          ...state,
          DinheiroPassivo: state.DinheiroPassivo + action.payload.x,
          Dinheiro: state.Dinheiro + state.DinheiroPassivo,
          cafeAtual,
        };
      }
      return {
        ...state,
        DinheiroPassivo: state.DinheiroPassivo + action.payload.x,
        Dinheiro: state.Dinheiro + state.DinheiroPassivo,
        cafeAtual: cafeAtual > limiteCafe - consumoCafe
          ? limiteCafe
          : cafeAtual + ProducaoCafe - consumoCafe,
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
      const { mX, level, dX, preco } = action.payload;
      return {
        ...state,
        mX: state.mX - mX * (level - 1) + mX * level,
        dX: state.dX - dX * (level - 1) + dX * level,
        Dinheiro: state.Dinheiro - (preco + (preco / 2) * level),
        Itens: [...state.Itens.filter((e:ItensType) => e !== action.payload), {
          ...action.payload, level: level + 1,
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
