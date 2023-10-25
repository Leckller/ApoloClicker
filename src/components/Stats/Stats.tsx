import { useStoreHook } from '../../Hooks/StoreHook';
import { StatsSection } from './StatsStyle';

function Stats() {
  const { store: { ClickerReducer: { cafeAtual, limiteCafe,
    ProducaoCafe, consumoCafe } } } = useStoreHook();
  return (
    <StatsSection>
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
    </StatsSection>
  );
}

export default Stats;
