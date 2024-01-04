import { useStoreHook } from '../../Hooks/StoreHook';
import { levelUp, sellItem } from '../../redux/actions/ClickDedeAction';

function Apolo() {
  const { store: { ClickerReducer: { Itens, Dinheiro } }, dispatch } = useStoreHook();
  return (
    <article
      className="bg-white w-full justify-center pt-1 absolute h-1/2 overflow-auto
    flex flex-row flex-wrap gap-1"
    >
      {Itens.sort((a, b) => {
        if (a.preco < b.preco) return 1;
        return 0;
      }).map((e, i) => (
        // preciso da imagem
        <div key={ i }>
          <h2>{`${e.name} - level ${e.level}`}</h2>
          <button
            onClick={ () => dispatch(levelUp(e)) }
            disabled={ Dinheiro < e.preco + (e.preco / 2) * e.level }
          >
            {`Melhorar - R$${
              e.preco + (e.preco / 2) * e.level}`}
          </button>
          <button
            onClick={ () => (
              dispatch(sellItem(
                e, (
                  (e.preco * e.level) / 4),
              ))) }
          >
            {`Vender por ${(e.preco * e.level) / 4}`}
          </button>
        </div>
      ))}
    </article>
  );
}

export default Apolo;
