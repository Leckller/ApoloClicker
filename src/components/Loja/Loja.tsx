import { useStoreHook } from '../../Hooks/StoreHook';
import { buyItem } from '../../redux/actions/ClickDedeAction';
import { AdvocaciaProducts } from './Produtos';
import { setLoja } from '../../redux/actions/LojasAction';
import LayoutMenus from '../LayoutMenus';

function Loja() {
  const { store: { ClickerReducer: { Dinheiro, Itens } }, dispatch } = useStoreHook();

  return (

    <LayoutMenus set={ setLoja } title="Loja">
      {AdvocaciaProducts.sort((a, b) => {
        if (a.preco < b.preco) return 1;
        return 0;
      }).filter((e) => Itens
        .find((ef) => ef.name === e.name)?.name !== e.name)
        .map((e) => (
          <article
            key={ e.id }
            className="w-[200px] gap-2 h-1/3 flex flex-col text-center mb-5 border"
          >

            <h3>{e.name}</h3>
            <img className="h-[40%]" src={ e.imagem } alt={ `Imagem de ${e.name}` } />
            <p className="h-[40%]">{e.desc}</p>
            <div className="flex p-2 flex-row justify-around items-center">
              <h4>{`R$ ${e.preco}`}</h4>
              <button
                className="border rounded-lg pl-2 pr-2 disabled:bg-red-200 bg-green-200"
                onClick={ () => {
                  dispatch(buyItem(e));
                } }
                disabled={ (Dinheiro < e.preco) }
              >
                Comprar
              </button>
            </div>
          </article>
        ))}
    </LayoutMenus>
  );
}

export default Loja;
