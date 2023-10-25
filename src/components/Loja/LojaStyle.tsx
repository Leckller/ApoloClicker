import styled from 'styled-components';

export const LojaSection = styled.section`
  width: 80vw;
  height: 80vh;
  position: absolute;
  border: solid black 1px;
  background-color: white;
`;

export const LojaDivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  button{
    padding: 2vh;
    background-color: transparent;
    width: 20%;
    border: none;
    font-size: 50px
  }
  h2{
    margin: 1vw;
    width: 20%;
    border: solid black 2px;
  }
  h1{
    width: 10%;
  }
`;

export const DivProductsNFilters = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;  
`;

export const DivProducts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const DivProduct = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  border: solid black 2px;
  border-radius: 10%;
  margin: .5vh;
  width: 30%;
  height: 50%;
  button {
    width: 80%;
    height: 15%;
  }
`;

// mobile

export const LojaSectionMobile = styled.section`
  width: 80vw;
  height: 80vh;
  position: absolute;
  top: 19vh;
  border: solid black 1px;
  background-color: white;
`;

export const DivProductsNFiltersMobile = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;  
`;

export const DivProductsMobile = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const DivProductMobile = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  border: solid black 2px;
  border-radius: 10%;
  margin: .5vh;
  width: 90%;
  height: 50%;
  button {
    width: 80%;
    height: 15%;
  }
`;
