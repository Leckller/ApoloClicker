import { ItensType } from '../../types';

export const CLICK_DEDE = 'CLICK_DEDE';

export const clickDede = (multiplicador: number = 1, Ganho: number = 1) => ({
  type: CLICK_DEDE,
  payload: {
    x: Number(multiplicador * Ganho),
  },
});

export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = (item: ItensType) => (
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

export const sellItem = (item: ItensType, value:number) => ({
  type: SELL_ITEM,
  payload: {
    item,
    value,
  },
});

export const AUTO_CLICK = 'AUTO_CLICK';

export const autoClick = (Ganho: number = 1, multiplicador: number = 1) => ({
  type: AUTO_CLICK,
  payload: {
    x: Number(multiplicador * Ganho),
  },
});

export const FATURA = 'FATURA';

export const fatura = () => ({
  type: FATURA,
});
