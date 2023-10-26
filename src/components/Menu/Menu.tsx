import { useStoreHook } from '../../Hooks/StoreHook';
import { setApolo, setConfig, setLoja, setStats } from '../../redux/actions/LojasAction';
import { BtnOptions } from '../StylesGerais';
import { SectionMenuMobile } from './MenuStyle';

function Menu() {
  const { dispatch } = useStoreHook();
  return (
    <SectionMenuMobile>
      <article>
        <button>{'<-'}</button>
        <h1>Apolo Clicker Beta 0.5</h1>
        <button>X</button>
      </article>
      <article>
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
      </article>
    </SectionMenuMobile>
  );
}

export default Menu;
