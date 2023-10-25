import { useSelector } from 'react-redux';
import { DivBlockHPadrao, HeaderS, HeaderSMobile } from './HeaderStyle';
import { GlobalState } from '../../types';
import { useStoreHook } from '../../Hooks/StoreHook';
import { setApolo, setConfig, setLoja, setStats } from '../../redux/actions/LojasAction';
import { BtnOptions } from '../StylesGerais';

function Header() {
  const { dispatch } = useStoreHook();
  const { ClickerReducer: { Dinheiro } } = useSelector((state: GlobalState) => state);
  if (window.innerWidth <= 420) {
    return (
      <HeaderSMobile>
        <h1>Apolo Clicker Beta 0.4</h1>
        <div>
          <section>
            <BtnOptions
              onClick={ () => {
                dispatch(setLoja());
              } }
            >
              Loja

            </BtnOptions>
            <BtnOptions
              onClick={ () => {
                dispatch(setApolo());
              } }
            >
              Apolo
            </BtnOptions>
            <BtnOptions
              onClick={ () => {
                dispatch(setConfig());
              } }
            >
              Configurações
            </BtnOptions>
            <BtnOptions
              onClick={ () => {
                dispatch(setStats());
              } }
            >
              stats
            </BtnOptions>
          </section>
          <section>
            <h2>
              {`R$ ${Dinheiro.toFixed(2)}`}
            </h2>
          </section>
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
      </DivBlockHPadrao>
      <div>
        <h1>Apolo Clicker Beta 0.4</h1>
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
