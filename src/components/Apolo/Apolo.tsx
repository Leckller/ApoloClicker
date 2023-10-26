import { useStoreHook } from '../../Hooks/StoreHook';
import { levelUp, sellItem } from '../../redux/actions/ClickDedeAction';
import { setApolo } from '../../redux/actions/LojasAction';
import { ArticleMenusMobile } from '../Menu/MenuStyle';
import { ApoloDivContent, ApoloDivContentMobile, ApoloDivHeader,
  ApoloProducts, ApoloProductsMobile, ApoloSection, DivApoloBox,
  DivApoloBoxMobile } from './ApoloStyle';

function Apolo() {
  const { store: { ClickerReducer: { Itens, Dinheiro } }, dispatch } = useStoreHook();
  if (window.innerWidth <= 420) {
    return (
      <ArticleMenusMobile>
        <DivApoloBoxMobile>
          <ApoloDivContentMobile>
            {Itens.sort((a, b) => {
              if (a.preco < b.preco) return 1;
              return 0;
            }).map((e, i) => (
              // preciso da imagem
              <ApoloProductsMobile key={ i }>
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
              </ApoloProductsMobile>
            ))}
          </ApoloDivContentMobile>
        </DivApoloBoxMobile>
      </ArticleMenusMobile>
    );
  }
  return (
    <ApoloSection>
      <ApoloDivHeader>
        <h1>
          Apolo
        </h1>
        <button
          onClick={ () => dispatch(setApolo()) }
        >
          X
        </button>
      </ApoloDivHeader>
      <DivApoloBox>
        <ApoloDivContent>
          {Itens.sort((a, b) => {
            if (a.preco < b.preco) return 1;
            return 0;
          }).map((e, i) => (
          // preciso da imagem
            <ApoloProducts key={ i }>
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
            </ApoloProducts>
          ))}
        </ApoloDivContent>
      </DivApoloBox>
    </ApoloSection>
  );
}

export default Apolo;
