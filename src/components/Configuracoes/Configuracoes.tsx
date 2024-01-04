/* eslint-disable no-alert */
import { useStoreHook } from '../../Hooks/StoreHook';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { setConfig } from '../../redux/actions/LojasAction';
import LayoutMenus from '../LayoutMenus';

function Configuracoes() {
  const { dispatch } = useStoreHook();
  return (
    <LayoutMenus set={ setConfig } title="Configurações">
      <button
        onClick={ () => {
          setTimeout(() => {
            localStorage.clear();
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }, 200);
        } }
      >
        Apagar Save
      </button>
      <h2>
        Esse botão Hack é apenas para testes ele não vai ficar disponivel
        para sempre
        <button onClick={ () => dispatch(clickDede(100, 100)) }>.</button>
      </h2>
      <button onClick={ () => alert('Para de ser pilantra') }>Hack</button>

    </LayoutMenus>
  );
}

export default Configuracoes;
