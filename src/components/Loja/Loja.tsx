import { useStoreHook } from '../../Hooks/StoreHook';
import { buyItem } from '../../redux/actions/ClickDedeAction';
import { setLoja } from '../../redux/actions/LojasAction';
import { DivProduct, DivProductMobile,
  DivProducts, DivProductsMobile, DivProductsNFilters,
  DivProductsNFiltersMobile,
  LojaDivHeader, LojaSection, LojaSectionMobile } from './LojaStyle';
import { AdvocaciaProducts } from './Produtos';

function Loja() {
  const { store: { ClickerReducer: { Dinheiro, Itens } }, dispatch } = useStoreHook();
  if (window.innerWidth <= 420) {
    return (
      <LojaSectionMobile>
        <DivProductsNFiltersMobile>
          <DivProductsMobile>
            {AdvocaciaProducts.filter((e) => Itens
              .find((ef) => ef.name === e.name)?.name !== e.name)
              .map((e) => (
                <DivProductMobile key={ e.id }>

                  <h3>{e.name}</h3>
                  <img src={ e.imagem } alt={ `Imagem de ${e.name}` } />
                  <h4>{e.desc}</h4>
                  <h4>{`R$ ${e.preco}`}</h4>
                  <button
                    onClick={ () => {
                      dispatch(buyItem({
                        name: e.name,
                        preco: e.preco,
                        tipo: e.tipo,
                        level: e.level,
                        dX: e.dX,
                        mX: e.mX,
                      }));
                    } }
                    disabled={ (Dinheiro < e.preco) }
                  >
                    Comprar
                  </button>
                </DivProductMobile>
              ))}
          </DivProductsMobile>
        </DivProductsNFiltersMobile>
      </LojaSectionMobile>
    );
  }
  return (
    <LojaSection>
      <LojaDivHeader>
        <h2>{`R$ ${Dinheiro.toFixed(2)}`}</h2>
        <h1>
          Actual Filter
        </h1>
        <button
          onClick={ () => dispatch(setLoja()) }
        >
          X
        </button>
      </LojaDivHeader>
      <DivProductsNFilters>
        <DivProducts>
          {AdvocaciaProducts.filter((e) => Itens
            .find((ef) => ef.name === e.name)?.name !== e.name)
            .map((e) => (
              <DivProduct key={ e.id }>

                <h3>{e.name}</h3>
                <img src={ e.imagem } alt={ `Imagem de ${e.name}` } />
                <h4>{e.desc}</h4>
                <h4>{`R$ ${e.preco}`}</h4>
                <button
                  onClick={ () => {
                    dispatch(buyItem({
                      name: e.name,
                      preco: e.preco,
                      tipo: e.tipo,
                      level: e.level,
                      dX: e.dX,
                      mX: e.mX,
                    }));
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
