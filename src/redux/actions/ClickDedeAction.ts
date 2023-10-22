import { ItensType } from '../../types';

export const CLICK_DEDE = 'CLICK_DEDE';

export const clickDede = (multiplicador: number = 1, Ganho: number = 1) => ({
  type: CLICK_DEDE,
  payload: {
    x: Number(multiplicador * Ganho),
  },
});

export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = (item: {
  name: string,
  preco: number,
  tipo: string,
  level: number,
  mX: number,
  dX: number,
}) => (
  {
    type: BUY_ITEM,
    payload: {
      item,
    },
  }
);

export const LEVEL_UP = 'LEVEL_UP';

export const levelUp = (item: ItensType) => ({
  type: LEVEL_UP,
  payload: item,
});

export const SELL_ITEM = 'SELL_ITEM';

export const sellItem = (item: ItensType, value:number, mX: number, dX: number) => ({
  type: SELL_ITEM,
  payload: {
    item,
    value,
    mX,
    dX,
  },
});

export const AUTO_CLICK = 'AUTO_CLICK';

export const autoClick = (multiplicador: number = 1, Ganho: number = 1) => ({
  type: AUTO_CLICK,
  payload: {
    x: Number(multiplicador * Ganho),
  },
});
