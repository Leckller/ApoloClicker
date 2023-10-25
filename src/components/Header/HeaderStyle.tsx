import styled from 'styled-components';

export const HeaderS = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: space-around;
`;

export const DivBlockHPadrao = styled.div`
  width: 10vw;
`;

// mobile

export const HeaderSMobile = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: transparent;
  position: absolute;
  color: white;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    section{
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-around;
      padding: 1vh;
      width: 100%;
    }
  }
`;
