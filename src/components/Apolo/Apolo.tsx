import { useStoreHook } from '../../Hooks/StoreHook';
import { levelUp, sellItem } from '../../redux/actions/ClickDedeAction';
import { setApolo } from '../../redux/actions/LojasAction';
import LayoutMenus from '../LayoutMenus';

function Apolo() {
  const { store: { ClickerReducer: { Itens, Dinheiro } }, dispatch } = useStoreHook();
  return (
    <LayoutMenus set={ setApolo } title="Apolo">
      {Itens.sort((a, b) => {
        if (a.preco < b.preco) return 1;
        return 0;
      }).map((e, i) => (
        // preciso da imagem
        <div
          key={ i }
          className="flex flex-col gap-5 items-center w-[200px]"
        >

          <h2>{`${e.name} - level ${e.level}`}</h2>
          <button
            className="disabled:bg-red-200 pl-2 pr-2 rounded-lg w-[90%] bg-green-200"
            onClick={ () => dispatch(levelUp(e)) }
            disabled={ Dinheiro < e.preco + (e.preco / 2) * e.level }
          >
            {`Melhorar - R$${
              e.preco + (e.preco / 2) * e.level}`}
          </button>
          <button
            className="pl-2 pr-2 rounded-lg bg-yellow-200 w-[90%]"
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
    </LayoutMenus>
  );
}

export default Apolo;
