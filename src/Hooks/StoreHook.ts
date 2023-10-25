import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalState } from '../types';
import { autoClick } from '../redux/actions/ClickDedeAction';

export function useStoreHook() {
  const dispatch = useDispatch();
  const store = useSelector((state:GlobalState) => state);
  const { LojasReducer: { apolo, loja } } = store;
  useEffect(() => {
    const Dede = setTimeout(() => {
      const { ClickerReducer: { dX, mX } } = store;
      const { cafeAtual, ProducaoCafe, consumoCafe, limiteCafe } = store.ClickerReducer;
      if ((cafeAtual <= 0 && consumoCafe > ProducaoCafe) || limiteCafe < consumoCafe) {
        dispatch(autoClick(dX / 2, mX / 2));
        console.log('se fudeu');
      } else {
        dispatch(autoClick(dX, mX));
        console.log('bem dmais');
      }
      // mx multiplicador, dX dinheiro multiplicado
    }, 1000);
    const effect = () => {
      return Dede;
    };
    effect();
    return () => clearTimeout(Dede);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.ClickerReducer.DinheiroPassivo]);
  return { store, dispatch, apolo, loja };
}
