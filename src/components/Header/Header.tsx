import { useSelector } from 'react-redux';
import { DivBlockHPadrao, HeaderS, HeaderSMobile } from './HeaderStyle';
import { GlobalState } from '../../types';
import { useStoreHook } from '../../Hooks/StoreHook';
import { setApolo, setLoja } from '../../redux/actions/LojasAction';
import { BtnOptions } from '../StylesGerais';

function Header() {
  const { dispatch } = useStoreHook();
  const { ClickerReducer: { Dinheiro } } = useSelector((state: GlobalState) => state);
  if (window.innerWidth <= 420) {
    return (
      <HeaderSMobile>
        <h1>Apolo Clicker Beta 0.2</h1>
        <div>
          <section>
            <BtnOptions onClick={ () => dispatch(setLoja()) }>Loja</BtnOptions>
            <BtnOptions onClick={ () => dispatch(setApolo()) }>Apolo</BtnOptions>
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
        <button>Configurações</button>
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
