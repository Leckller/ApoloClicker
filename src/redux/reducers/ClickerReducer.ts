/* eslint-disable complexity */
/* eslint-disable react-func/max-lines-per-function */
/* eslint-disable no-alert */
import { AnyAction } from 'redux';
import { AUTO_CLICK, BUY_ITEM, CLICK_DEDE, FATURA, LEVEL_UP,
  SELL_ITEM } from '../actions/ClickDedeAction';
import { ItensType } from '../../types';

const key = 'Clicker';
const local = JSON.parse(localStorage.getItem(key) as string);

const InitialState = {
  Clicks: localStorage.getItem(key) ? local.Clicks : 0,
  Dinheiro: localStorage.getItem(key) ? local.Dinheiro : 0,
  mX: localStorage.getItem(key) ? local.mX : 0.2,
  dX: localStorage.getItem(key) ? local.dX : 1,
  energia: localStorage.getItem(key) ? local.energia : 0,
  internet: localStorage.getItem(key) ? local.internet : 0,
  Sprite: 1,
  DinheiroPassivo: 0,
  ProducaoCafe: localStorage.getItem(key) ? local.ProducaoCafe : 5,
  limiteCafe: localStorage.getItem(key) ? local.limiteCafe : 25,
  cafeAtual: localStorage.getItem(key) ? local.cafeAtual : 0,
  consumoCafe: localStorage.getItem(key) ? local.consumoCafe : 5,
  Itens: localStorage.getItem(key) ? local.Itens : [],
};

// eslint-disable-next-line sonarjs/cognitive-complexity
const ClickerReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case CLICK_DEDE: {
      return { ...state,
        Clicks: state.Clicks + 1,
        Dinheiro: action.payload.x + state.Dinheiro,
        Sprite: state.Sprite === 1 ? 2 : 1 };
    }
    case AUTO_CLICK: {
      const actState = { ...state };
      localStorage.setItem(key, JSON.stringify(actState));
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
          cafeAtual: 0,
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
      const { item } = action.payload;
      if (state.Itens.some((e: ItensType) => e.name === action.payload.item.name)) {
        alert('Você já possui este item!');
        return { ...state };
      }
      return {
        ...state,
        Itens: [...state.Itens, item],
        Dinheiro: state.Dinheiro - item.preco,
        mX: state.mX + item.mX,
        dX: state.dX + item.dX,
        consumoCafe: state.consumoCafe + item.consumo,
        ProducaoCafe: state.ProducaoCafe + item.produz,
        limiteCafe: state.limiteCafe + item.tamanho,
        energia: state.energia + item.energia,
        internet: state.internet + item.velocidade,
      };
    }
    case LEVEL_UP: {
      const { mX, level, dX, preco, tamanho,
        consumo, produz, energia, velocidade } = action.payload;
      return {
        ...state,
        mX: state.mX - mX * (level - 1) + mX * level,
        dX: state.dX - dX * (level - 1) + dX * level,
        limiteCafe: state.limiteCafe + tamanho * level - (tamanho === 0 ? 0
          : tamanho * (level - 1)),
        consumoCafe: state.consumoCafe + consumo * level - (consumo === 0 ? 0
          : consumo * (level - 1)),
        ProducaoCafe: state.ProducaoCafe + produz * level - (produz === 0 ? 0
          : produz * (level - 1)),
        Dinheiro: state.Dinheiro - (preco + (preco / 2) * level),
        Itens: [...state.Itens.filter((e:ItensType) => e !== action.payload), {
          ...action.payload, level: level + 1,
        }],
        energia: state.energia - energia * (level - 1) + energia * level,
        internet: state.internet - velocidade * (level - 1) + velocidade * level,
      };
    }
    case SELL_ITEM: {
      const { mX, level, dX, tamanho,
        consumo, produz, energia, velocidade } = action.payload.item;
      return { ...state,
        Itens: [...state.Itens
          .filter((e: ItensType) => e !== action.payload.item)],
        Dinheiro: state.Dinheiro + action.payload.value,
        dX: state.dX - (dX * level),
        mX: state.mX - (mX * level),
        limiteCafe: state.limiteCafe - (tamanho * level),
        ProducaoCafe: state.ProducaoCafe - (produz * level),
        consumoCafe: state.consumoCafe - (consumo * level),
        energia: state.energia - (energia * level),
        internet: state.internet - (velocidade * level),
      };
    }
    case FATURA: {
      if (state.Dinheiro < state.energia) {
        console.log('vish faliu kkk');
        return { ...state };
      }
      return {
        ...state,
        Dinheiro: state.Dinheiro - state.energia,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default ClickerReducer;
