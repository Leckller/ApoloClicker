import { useStoreHook } from '../../Hooks/StoreHook';
import { sellItem } from '../../redux/actions/ClickDedeAction';
import { ApoloDivContent, ApoloDivHeader,
  ApoloProducts, ApoloSection, DivApoloBox } from './ApoloStyle';

function Apolo({ setApolo, apolo }: { setApolo: (p: boolean) => void, apolo: boolean }) {
  const { store: { ClickerReducer: { Itens } }, dispatch } = useStoreHook();
  return (
    <ApoloSection>
      <ApoloDivHeader>
        <h1>
          Apolo
        </h1>
        <button
          onClick={ () => setApolo(!apolo) }
        >
          X
        </button>
      </ApoloDivHeader>
      <DivApoloBox>
        <ApoloDivContent>
          {Itens.map((e, i) => (
          // preciso da imagem
            <ApoloProducts key={ i }>
              <h2>{`${e.name} - level ${e.level}`}</h2>
              <button>
                {`Melhorar - R$${
                  e.preco + (e.preco / 2) * e.level}`}
              </button>
              <button
                onClick={ () => dispatch(sellItem(e, (e.preco * 0.5), e.mX, e.dX)) }
              >
                {`Vender por ${e.preco * 0.5}`}
              </button>
            </ApoloProducts>
          ))}
        </ApoloDivContent>
      </DivApoloBox>
    </ApoloSection>
  );
}

export default Apolo;
