import { DivDedeNSec, MainS, MainSMobile } from './MainStyle';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { useStoreHook } from '../../Hooks/StoreHook';
import Loja from '../Loja/Loja';
import Apolo from '../Apolo/Apolo';
import { setApolo, setLoja } from '../../redux/actions/LojasAction';

function Main() {
  const { dispatch, store: { ClickerReducer: { dX, mX } }, apolo, loja } = useStoreHook();
  console.log(window.innerWidth);
  if (window.innerWidth <= 420) {
    return (
      <MainSMobile onClick={ () => dispatch(clickDede(mX * 1.2, dX)) }>
        { loja && <Loja />}
        { apolo && <Apolo />}
      </MainSMobile>
    );
  }
  return (
    <MainS>
      { loja && <Loja />}
      { apolo && <Apolo />}
      <DivDedeNSec>
        <section>
          <button onClick={ () => dispatch(setLoja()) }>Loja</button>
          <button>Skins</button>
          <button onClick={ () => dispatch(setApolo()) }>Apolo</button>
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
