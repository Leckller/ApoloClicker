import { useSelector } from 'react-redux';
import { GlobalState } from '../../types';
import { useStoreHook } from '../../Hooks/StoreHook';
import { setMenu } from '../../redux/actions/LojasAction';

function Header() {
  const { dispatch } = useStoreHook();
  const { ClickerReducer: { Dinheiro }, timerReducer,
  } = useSelector((state: GlobalState) => state);

  return (
    <header
      className="flex flex-row flex-nowrap w-full justify-around text-white
        p-3"
    >
      <button
        className="w-1/2 text-center"
        onClick={ () => dispatch(setMenu()) }
      >
        Menu
      </button>

      <div className="w-1/2 text-center">
        <h2>
          {`R$ ${Dinheiro.toFixed(2)}`}
        </h2>

        <h2>
          {`Dia ${timerReducer.dias} - 
              1${timerReducer.minutes}:${timerReducer.seconds
              < 10 ? `0${timerReducer.seconds}` : timerReducer.seconds}`}
        </h2>
      </div>
    </header>
  );
}

export default Header;
