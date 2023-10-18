import { useStoreHook } from '../../Hooks/StoreHook';
import { DivProduct, DivProducts, DivProductsNFilters,
  LojaDivHeader, LojaSection } from './LojaStyle';
import { AdvocaciaProducts } from './Produtos';

function Loja({ setLoja, loja }: { setLoja: (p: boolean) => void, loja: boolean }) {
  const { store } = useStoreHook();
  return (
    <LojaSection>
      <LojaDivHeader>
        <h2>{`R$ ${store.ClickerReducer.Dinheiro.toFixed(2)}`}</h2>
        <h1>
          Actual Filter
        </h1>
        <button
          onClick={ () => setLoja(!loja) }
        >
          X
        </button>
      </LojaDivHeader>
      <DivProductsNFilters>
        <DivProducts>
          {AdvocaciaProducts.map((e) => (
            <DivProduct key={ e.id }>
              <h3>{e.nome}</h3>
              <img src={ e.imagem } alt={ `Imagem de ${e.nome}` } />
              <h4>{`R$ ${e.preco}`}</h4>
              <button>Comprar</button>
            </DivProduct>
          ))}
        </DivProducts>
        <div>search</div>
      </DivProductsNFilters>
    </LojaSection>
  );
}

export default Loja;
