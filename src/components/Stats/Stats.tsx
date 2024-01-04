import { useStoreHook } from '../../Hooks/StoreHook';
import { setStats } from '../../redux/actions/LojasAction';
import LayoutMenus from '../LayoutMenus';

function Stats() {
  const { store: { ClickerReducer: { cafeAtual, limiteCafe,
    ProducaoCafe, consumoCafe, energia, internet, dX, mX } } } = useStoreHook();
  return (
    <LayoutMenus set={ setStats } title="Status">
      <div className="flex flex-col justify-center">
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
      </div>

      <div className="flex flex-row text-center gap-5 mb-10">
        <div className="flex flex-col items-center justify-center">
          <h2>Próxima Fatura</h2>
          <h3>
            {`R$ ${energia}`}
          </h3>
        </div>

        <div className="border" />

        <div className="flex flex-col items-center justify-center">
          <h2>Ganhos</h2>
          <h3>
            {`Por click -> R$${(mX * 1.2 * dX).toFixed(2)}`}
          </h3>
          <h3>{`Passivamente -> R$${(mX * dX).toFixed(2)}`}</h3>
        </div>

        <div className="border" />

        <div className="flex flex-col items-center justify-center">
          <h2>Velocidade da Internet</h2>
          <h3>
            {`${internet} Mega`}
          </h3>
        </div>

      </div>

    </LayoutMenus>
  );
}

export default Stats;
