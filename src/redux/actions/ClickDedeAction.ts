export const CLICK_DEDE = 'CLICK_DEDE';

export const clickDede = (multiplicador: number = 1, Ganho: number = 1) => ({
  type: CLICK_DEDE,
  payload: {
    x: Number(multiplicador * Ganho),
  },
});
