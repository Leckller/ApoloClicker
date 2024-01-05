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
    // refatorar esse sistema aqui com urgencia
    const Timer = setTimeout(() => {
      dispatch(timerAction(Dinheiro));
      if (timerEnd) {
        dispatch(moneyGap(Dinheiro));
        dispatch(fatura());
      }
    }, 1000);
    return clearTimeout(Timer);
  }, [DinheiroPassivo]);

  return (
    <main
      className="h-full md:w-full md:flex md:flex-row"
      onClick={ () => dispatch(clickDede(mX * 1.2, dX)) }
    >
      {Sprite === 1 && <img src={ dedeImg2 } alt="" className="md:w-[70%]" />}
      {Sprite === 2 && <img src={ dedeImg3 } alt="" className="md:w-[70%]" />}
      <div className="-z-10 bg-[#4b5451] absolute right-0 md:w-[30%] md:h-full" />
      <div
        className="h-full w-full md:w-[30%] md:text-xl text-white
      "
      >
        { loja && <Loja />}
        { apolo && <Apolo />}
        { config && <Configuracoes />}
        { stats && <Stats />}
        { menu && <Menu />}
      </div>
    </main>
  );
}

export default Main;
