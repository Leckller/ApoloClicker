import { useStoreHook } from '../../Hooks/StoreHook';
import { levelUp, sellItem } from '../../redux/actions/ClickDedeAction';
import { setApolo } from '../../redux/actions/LojasAction';

function Apolo() {
  const { store: { ClickerReducer: { Itens, Dinheiro } }, dispatch } = useStoreHook();
  if (window.innerWidth <= 420) {
    return (
      <div>
        <div>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h1>
          Apolo
        </h1>
        <button
          onClick={ () => dispatch(setApolo()) }
        >
          X
        </button>
      </div>
      <div>
        <div>
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
                onClick={ () => dispatch(sellItem(e, (e.preco * 0.5))) }
              >
                {`Vender por ${e.preco * 0.5}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Apolo;
