import { useState } from 'react';
import { DivDedeNSec, MainS } from './MainStyle';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { useStoreHook } from '../../Hooks/StoreHook';
import Loja from '../Loja/Loja';

function Main() {
  const { dispatch } = useStoreHook();
  const [loja, setLoja] = useState(false);
  return (
    <MainS>
      { loja && <Loja loja={ loja } setLoja={ setLoja } />}
      <DivDedeNSec>
        <section>
          <button onClick={ () => setLoja(!loja) }>Loja</button>
          <button>Skins</button>
          <button>Apolo</button>
        </section>
        <div>
          <button
            onClick={
            () => dispatch(clickDede())
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
