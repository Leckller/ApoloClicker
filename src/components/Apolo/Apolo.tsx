import { LojaDivHeader, LojaSection } from '../Loja/LojaStyle';

function Apolo({ setApolo, apolo }: { setApolo: (p: boolean) => void, apolo: boolean }) {
  return (
    <LojaSection>
      <LojaDivHeader>
        <h1>
          Apolo
        </h1>
        <button
          onClick={ () => setApolo(!apolo) }
        >
          X
        </button>
      </LojaDivHeader>
    </LojaSection>
  );
}

export default Apolo;
