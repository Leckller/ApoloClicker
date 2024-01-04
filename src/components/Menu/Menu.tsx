import { useStoreHook } from '../../Hooks/StoreHook';
import { setApolo, setConfig,
  setLoja, setMenu, setStats } from '../../redux/actions/LojasAction';

function Menu() {
  const { dispatch } = useStoreHook();
  return (
    <section className="bg-white w-full h-full flex flex-col gap-5 items-center">

      <article className="flex flex-row w-full justify-around">

        <h1>Apolo Clicker Beta 0.5</h1>

        <button onClick={ () => dispatch(setMenu()) }>X</button>

      </article>

      <article className="flex flex-col gap-9">
        <button
          onClick={ () => {
            dispatch(setLoja());
          } }
        >
          Loja

        </button>

        <div className="border-b" />

        <button
          onClick={ () => {
            dispatch(setApolo());
          } }
        >
          Apolo
        </button>

        <div className="border-b" />

        <button
          onClick={ () => {
            dispatch(setConfig());
          } }
        >
          Configurações
        </button>

        <div className="border-b" />

        <button
          onClick={ () => {
            dispatch(setStats());
          } }
        >
          stats
        </button>
      </article>

    </section>
  );
}

export default Menu;
