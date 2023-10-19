import { ApoloDivContent, ApoloDivHeader, ApoloSection, DivApoloBox } from './ApoloStyle';

function Apolo({ setApolo, apolo }: { setApolo: (p: boolean) => void, apolo: boolean }) {
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
        <ApoloDivContent />
      </DivApoloBox>
    </ApoloSection>
  );
}

export default Apolo;
