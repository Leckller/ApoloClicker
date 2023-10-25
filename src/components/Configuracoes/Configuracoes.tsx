import { useStoreHook } from '../../Hooks/StoreHook';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { ConfigSectionMobile } from './ConfiguracoesStyle';

function Configuracoes() {
  const { dispatch } = useStoreHook();
  return (
    <ConfigSectionMobile>
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
        para sempre.
      </h2>
      {/* <button onClick={ () => dispatch(clickDede(100, 100)) }>Hack</button> */}
      <button onClick={ () => alert('Para de ser pilantra') }>Hack</button>

    </ConfigSectionMobile>
  );
}

export default Configuracoes;
