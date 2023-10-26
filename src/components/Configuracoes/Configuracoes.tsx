/* eslint-disable no-alert */
import { useStoreHook } from '../../Hooks/StoreHook';
import { clickDede } from '../../redux/actions/ClickDedeAction';
import { ArticleMenusMobile } from '../Menu/MenuStyle';
import { ConfigButton } from './ConfiguracoesStyle';

function Configuracoes() {
  const { dispatch } = useStoreHook();
  return (
    <ArticleMenusMobile>
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
        <ConfigButton onClick={ () => dispatch(clickDede(100, 100)) }>.</ConfigButton>
      </h2>
      <button onClick={ () => alert('Para de ser pilantra') }>Hack</button>

    </ArticleMenusMobile>
  );
}

export default Configuracoes;
