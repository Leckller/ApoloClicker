import { useSelector } from 'react-redux';
import { DivBlockHPadrao, HeaderS, HeaderSMobile } from './HeaderStyle';
import { GlobalState } from '../../types';
import { useStoreHook } from '../../Hooks/StoreHook';

function Header() {
  const { dispatch } = useStoreHook();
  const { ClickerReducer: { Dinheiro }, timerReducer,
  } = useSelector((state: GlobalState) => state);
  if (window.innerWidth <= 420) {
    return (
      <HeaderSMobile>
        <button>=</button>
        <div>
          <section>
            <h2>
              {`R$ ${Dinheiro.toFixed(2)}`}
            </h2>
            <div>
              <h2>
                {`Dia ${timerReducer.dias} - 
              1${timerReducer.minutes}:${timerReducer.seconds
              < 10 ? `0${timerReducer.seconds}` : timerReducer.seconds}`}
              </h2>
            </div>
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
            localStorage.removeItem('Clicks');
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          } }
        >
          Configurações

        </button>
      </DivBlockHPadrao>
      <div>
        <h1>Apolo Clicker Beta 0.5</h1>
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
