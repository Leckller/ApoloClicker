import { useState } from 'react';
import { DivDedeNSec, MainS } from './MainStyle';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { useStoreHook } from '../../Hooks/StoreHook';
import Loja from '../Loja/Loja';
import Apolo from '../Apolo/Apolo';

function Main() {
  const { dispatch } = useStoreHook();
  const [loja, setLoja] = useState(false);
  const [apolo, setApolo] = useState(false);
  return (
    <MainS>
      { loja && <Loja loja={ loja } setLoja={ setLoja } />}
      { apolo && <Apolo apolo={ apolo } setApolo={ setApolo } />}
      <DivDedeNSec>
        <section>
          <button onClick={ () => setLoja(!loja) }>Loja</button>
          <button>Skins</button>
          <button onClick={ () => setApolo(!apolo) }>Apolo</button>
        </section>
        <div>
          <button
            onClick={
            () => dispatch(clickDede(100))
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
