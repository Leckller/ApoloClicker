import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalState } from '../types';
import { clickDede } from '../redux/actions/ClickDedeAction';

export function useStoreHook() {
  const dispatch = useDispatch();
  const store = useSelector((state:GlobalState) => state);
  useEffect(() => {
    const Dede = setTimeout(() => {
      dispatch(clickDede(0.2, 1));
    }, 1000);
    const effect = () => {
      return Dede;
    };
    effect();
    return () => clearTimeout(Dede);
  }, [store.ClickerReducer.Dinheiro]);
  return { store, dispatch };
}
