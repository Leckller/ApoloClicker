import { DivDedeNSec, ImageDede, MainS, MainSMobile } from './MainStyle';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { useStoreHook } from '../../Hooks/StoreHook';
import Loja from '../Loja/Loja';
import Apolo from '../Apolo/Apolo';
import { setApolo, setLoja } from '../../redux/actions/LojasAction';
import dedeImg2 from '../../assets/DedePP1.png';
import dedeImg3 from '../../assets/dedeP2.png';
import Configuracoes from '../Configuracoes/Configuracoes';

function Main() {
  const { dispatch, store: { ClickerReducer: { dX, mX, Sprite } },
    apolo, loja, config } = useStoreHook();
  if (window.innerWidth <= 420) {
    return (
      <MainSMobile onClick={ () => dispatch(clickDede(mX * 1.2, dX)) }>
        { loja && <Loja />}
        { apolo && <Apolo />}
        { config && <Configuracoes />}
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
      <DivDedeNSec>
        <section>
          <button
            onClick={ () => {
              if (apolo === true) {
                dispatch(setApolo());
                dispatch(setLoja());
              } else { dispatch(setLoja()); }
            } }
          >
            Loja
          </button>
          <button>Skins</button>
          <button
            onClick={ () => {
              if (loja) {
                dispatch(setLoja());
                dispatch(setApolo());
              } else { dispatch(setApolo()); }
            } }
          >
            Apolo

          </button>
        </section>
        <div>
          <button
            onClick={
            () => dispatch(clickDede(mX * 1.2, dX))
          }
          >
            <img src="" alt="Tio Dedé" />
          </button>
        </div>
      </DivDedeNSec>
    </MainS>
  );
}

export default Main;
