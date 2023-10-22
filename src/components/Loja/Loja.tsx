import { useStoreHook } from '../../Hooks/StoreHook';
import { buyItem, levelUp } from '../../redux/actions/ClickDedeAction';
import { DivProduct, DivProducts, DivProductsNFilters,
  LojaDivHeader, LojaSection } from './LojaStyle';
import { AdvocaciaProducts } from './Produtos';

function Loja({ setLoja, loja }: { setLoja: (p: boolean) => void, loja: boolean }) {
  const { store: { ClickerReducer: { Dinheiro, Itens } }, dispatch } = useStoreHook();
  return (
    <LojaSection>
      <LojaDivHeader>
        <h2>{`R$ ${Dinheiro.toFixed(2)}`}</h2>
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
          {AdvocaciaProducts.filter((e) => Itens
            .find((ef) => ef.name === e.nome)?.name !== e.nome)
            .map((e) => (
              <DivProduct key={ e.id }>
                <h3>{e.nome}</h3>
                <img src={ e.imagem } alt={ `Imagem de ${e.nome}` } />
                <h4>{e.desc}</h4>
                <h4>{`R$ ${e.preco}`}</h4>
                <button
                  onClick={ () => {
                    dispatch(buyItem({
                      name: e.nome,
                      preco: e.preco,
                      tipo: e.tipo,
                      level: e.level,
                      dX: e.dX,
                      mX: e.mX,
                    }));
                    dispatch(levelUp(e.level));
                  } }
                  disabled={ (Dinheiro < e.preco) }
                >
                  Comprar
                </button>
              </DivProduct>
            ))}
        </DivProducts>
      </DivProductsNFilters>
    </LojaSection>
  );
}

export default Loja;
