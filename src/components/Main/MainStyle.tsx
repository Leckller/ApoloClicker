import styled from 'styled-components';

export const MainS = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
`;

export const DivDedeNSec = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 80%;
  justify-content: center;
  section{
    width: 20vw;
    border: solid black 1px;
    display: flex;
    flex-direction: column;
    button{
      flex-grow: 1;
    }
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
    width: 80vw;
    button {
      width: 100%;
      height: 100%;
    }
  }
`;

// mobile

export const MainSMobile = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  border: solid black 1px;
`;

export const ImageDede = styled.img`
  width: 900px;
  transform: translate(50px);
  height: 980px;
  border: solid black 10px;
  z-index: -1000;
`;
