import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalState } from '../types';
import { clickDede } from '../redux/actions/ClickDedeAction';

export function useStoreHook() {
  const dispatch = useDispatch();
  const store = useSelector((state:GlobalState) => state);
  useEffect(() => {
    const Dede = setTimeout(() => {
      const { ClickerReducer: { dX, mX } } = store;
      dispatch(clickDede(mX, dX));
      // mx multiplicador, dX dinheiro multiplicado
    }, 1000);
    const effect = () => {
      return Dede;
    };
    effect();
    return () => clearTimeout(Dede);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.ClickerReducer.Dinheiro]);
  return { store, dispatch };
}
