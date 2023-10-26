import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalState } from '../types';
import { autoClick, fatura } from '../redux/actions/ClickDedeAction';
import { moneyGap, timerAction } from '../redux/actions/TimerAction';

export function useStoreHook() {
  const dispatch = useDispatch();
  const store = useSelector((state:GlobalState) => state);
  const { LojasReducer: { apolo, loja, config, stats },
    ClickerReducer: { internet } } = store;
  useEffect(() => {
    const Timer = setTimeout(() => {
      dispatch(timerAction(store.ClickerReducer.Dinheiro));
      if (store.timerReducer.timerEnd) {
        dispatch(moneyGap(store.ClickerReducer.Dinheiro));
        dispatch(fatura());
      }
    }, 1000);
    const Dede = setTimeout(() => {
      const { ClickerReducer: { dX, mX } } = store;
      const { cafeAtual, ProducaoCafe, consumoCafe, limiteCafe } = store.ClickerReducer;
      if ((cafeAtual <= 0 && consumoCafe > ProducaoCafe) || limiteCafe < consumoCafe) {
        dispatch(autoClick(dX / 2, mX / 2));
        console.log('Tem gente cansada...');
        // o historico ta sendo afetado antes disso mas acho q é melhor assim
      } else {
        dispatch(autoClick(dX, mX));
      }
      // mx multiplicador, dX dinheiro multiplicado
    }, ((1000 - internet) >= 500 ? 1000 - internet : 500));
    return () => {
      clearTimeout(Timer);
      clearTimeout(Dede);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.ClickerReducer.DinheiroPassivo]);
  return { store, dispatch, apolo, loja, config, stats };
}
