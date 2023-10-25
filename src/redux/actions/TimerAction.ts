export const TIMER_ACTION = 'TIMER_ACTION';

export const timerAction = (inicio: number) => ({
  type: TIMER_ACTION,
  payload: inicio,
});

export const MONEY_GAP = 'MONEY_GAP';

export const moneyGap = (money: number) => (
  {
    type: MONEY_GAP,
    payload: money,
  }
);
