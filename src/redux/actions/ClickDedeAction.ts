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

export const levelUp = (level: number) => ({
  type: LEVEL_UP,
  payload: level,
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
