import { useSelector } from 'react-redux';
import { DivBlockHPadrao, HeaderS } from './HeaderStyle';
import { GlobalState } from '../../types';

function Header() {
  const store = useSelector((state: GlobalState) => state.ClickerReducer);
  return (
    <HeaderS>
      <DivBlockHPadrao>
        <button>Configurações</button>
      </DivBlockHPadrao>
      <div>
        <h1>Apolo Clicker Beta 0.2</h1>
      </div>
      <DivBlockHPadrao>
        {
        `R$ ${store.Dinheiro.toFixed(2)}`
        }
      </DivBlockHPadrao>
    </HeaderS>
  );
}

export default Header;
