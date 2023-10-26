import { DivDedeNSec, ImageDede, MainS, MainSMobile } from './MainStyle';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { useStoreHook } from '../../Hooks/StoreHook';
import Loja from '../Loja/Loja';
import Apolo from '../Apolo/Apolo';
import dedeImg2 from '../../assets/DedePP1.png';
import dedeImg3 from '../../assets/dedeP2.png';
import Configuracoes from '../Configuracoes/Configuracoes';
import Stats from '../Stats/Stats';
import Menu from '../Menu/Menu';

function Main() {
  const { dispatch, store: { ClickerReducer: { dX, mX, Sprite } },
    apolo, loja, config, stats, menu } = useStoreHook();
  if (window.innerWidth <= 420) {
    return (
      <MainSMobile onClick={ () => dispatch(clickDede(mX * 1.2, dX)) }>
        { loja && <Loja />}
        { apolo && <Apolo />}
        { config && <Configuracoes />}
        { stats && <Stats />}
        { menu && <Menu />}
        {Sprite === 1 && <ImageDede src={ dedeImg2 } alt="" />}
        {Sprite === 2 && <ImageDede src={ dedeImg3 } alt="" />}
      </MainSMobile>
    );
  }
  return (
    <MainS>
      { loja && <Loja />}
      { apolo && <Apolo />}
      { config && <Configuracoes />}
      { stats && <Stats />}
      <DivDedeNSec
        onClick={
            () => dispatch(clickDede(mX * 1.2, dX))
          }
      >
        {Sprite === 1 && <ImageDede src={ dedeImg2 } alt="" />}
        {Sprite === 2 && <ImageDede src={ dedeImg3 } alt="" />}
      </DivDedeNSec>
    </MainS>
  );
}

export default Main;
