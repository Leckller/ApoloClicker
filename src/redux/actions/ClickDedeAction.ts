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
