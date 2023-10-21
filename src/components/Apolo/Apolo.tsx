import { useStoreHook } from '../../Hooks/StoreHook';
import { ApoloDivContent, ApoloDivHeader,
  ApoloProducts, ApoloSection, DivApoloBox } from './ApoloStyle';

function Apolo({ setApolo, apolo }: { setApolo: (p: boolean) => void, apolo: boolean }) {
  const { store: { ClickerReducer: { Itens } } } = useStoreHook();
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
              <h2>{e.name}</h2>
              <button>Melhorar xx.xx</button>
              <button>{`Vender por ${e.preco * 0.5}`}</button>
            </ApoloProducts>
          ))}
        </ApoloDivContent>
      </DivApoloBox>
    </ApoloSection>
  );
}

export default Apolo;
