import { useStoreHook } from '../../Hooks/StoreHook';
import LayoutMenus from '../LayoutMenus';

function Stats() {
  const { store: { ClickerReducer: { cafeAtual, limiteCafe,
    ProducaoCafe, consumoCafe, energia, internet, dX, mX } } } = useStoreHook();
  return (
    <LayoutMenus>
      <article>
        <h2>Coffe</h2>
        <h3>
          {`Coffe ${cafeAtual}`}
        </h3>
        <h3>
          {`Produção ${ProducaoCafe}`}
        </h3>
        <h3>
          {`Consumo ${consumoCafe}`}
        </h3>
        <h3>
          {`Limite ${limiteCafe}`}
        </h3>
        {(cafeAtual === 0 && ProducaoCafe < consumoCafe) && (
          <div>
            <h4>Deficit de café!!!</h4>
            <h4>Seus funcionários estão trabalhando 4X menos</h4>
          </div>
        )}
      </article>
      <article>
        <h2>Próxima Fatura</h2>
        <h3>
          {`R$ ${energia}`}
        </h3>
      </article>
      <article>
        <h2>Ganhos</h2>
        <h3>
          {`Por click -> R$${(mX * 1.2 * dX).toFixed(2)}`}
        </h3>
        <h3>{`Passivamente -> R$${(mX * dX).toFixed(2)}`}</h3>
      </article>
      <article>
        <h2>Velocidade da Internet</h2>
        <h3>
          {`${internet} Mega`}
        </h3>
      </article>
    </LayoutMenus>
  );
}

export default Stats;
