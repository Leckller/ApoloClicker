/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { clickDede, fatura } from '../../redux/actions/ClickDedeAction';
import { useStoreHook } from '../../Hooks/StoreHook';
import Loja from '../Loja/Loja';
import Apolo from '../Apolo/Apolo';
import dedeImg2 from '../../assets/DedePP1.png';
import dedeImg3 from '../../assets/dedeP2.png';
import Configuracoes from '../Configuracoes/Configuracoes';
import Stats from '../Stats/Stats';
import Menu from '../Menu/Menu';
import { moneyGap, timerAction } from '../../redux/actions/TimerAction';

function Main() {
  const { dispatch, store: { ClickerReducer: { dX, mX, Sprite, Dinheiro,
    DinheiroPassivo },
  timerReducer: { timerEnd } },
  apolo, loja, config, stats, menu } = useStoreHook();
  useEffect(() => {
    const Timer = setTimeout(() => {
      dispatch(timerAction(Dinheiro));
      if (timerEnd) {
        dispatch(moneyGap(Dinheiro));
        dispatch(fatura());
      }
    }, 1000);
    return clearTimeout(Timer);
  }, [DinheiroPassivo]);
  if (window.innerWidth <= 420) {
    return (
      <main onClick={ () => dispatch(clickDede(mX * 1.2, dX)) }>
        { loja && <Loja />}
        { apolo && <Apolo />}
        { config && <Configuracoes />}
        { stats && <Stats />}
        { menu && <Menu />}
        {Sprite === 1 && <img src={ dedeImg2 } alt="" />}
        {Sprite === 2 && <img src={ dedeImg3 } alt="" />}
      </main>
    );
  }
  return (
    <main>
      { loja && <Loja />}
      { apolo && <Apolo />}
      { config && <Configuracoes />}
      { stats && <Stats />}
      <div
        onClick={
            () => dispatch(clickDede(mX * 1.2, dX))
          }
      >
        {Sprite === 1 && <img src={ dedeImg2 } alt="" />}
        {Sprite === 2 && <img src={ dedeImg3 } alt="" />}
      </div>
    </main>
  );
}

export default Main;
