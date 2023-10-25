import { useSelector } from 'react-redux';
import { DivBlockHPadrao, HeaderS, HeaderSMobile } from './HeaderStyle';
import { GlobalState } from '../../types';
import { useStoreHook } from '../../Hooks/StoreHook';
import { setApolo, setLoja } from '../../redux/actions/LojasAction';
import { BtnOptions } from '../StylesGerais';
import { clickDede } from '../../redux/actions/ClickDedeAction';

function Header() {
  const { dispatch } = useStoreHook();
  const { ClickerReducer: { Dinheiro },
    LojasReducer: { apolo, loja } } = useSelector((state: GlobalState) => state);
  if (window.innerWidth <= 420) {
    return (
      <HeaderSMobile>
        <h1>Apolo Clicker Beta 0.3</h1>
        <div>
          <section>
            <BtnOptions
              onClick={ () => {
                if (apolo) {
                  dispatch(setApolo());
                  dispatch(setLoja());
                } else { dispatch(setLoja()); }
              } }
            >
              Loja

            </BtnOptions>
            <BtnOptions
              onClick={ () => {
                if (loja) {
                  dispatch(setLoja());
                  dispatch(setApolo());
                } else { dispatch(setApolo()); }
              } }
            >
              Apolo

            </BtnOptions>
          </section>
          <h2>
            {`R$ ${Dinheiro.toFixed(2)}`}
          </h2>
        </div>
      </HeaderSMobile>
    );
  }
  return (
    <HeaderS>
      <DivBlockHPadrao>
        <button
          onClick={ () => {
            localStorage.clear();
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          } }
        >
          Configurações

        </button>
        <button onClick={ () => dispatch(clickDede(100, 100)) }>Hack</button>
      </DivBlockHPadrao>
      <div>
        <h1>Apolo Clicker Beta 0.2</h1>
      </div>
      <DivBlockHPadrao>
        <h2>
          {
        `R$ ${Dinheiro.toFixed(2)}`
        }
        </h2>
      </DivBlockHPadrao>
    </HeaderS>
  );
}

export default Header;
