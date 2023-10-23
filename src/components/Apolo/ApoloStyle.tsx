import styled from 'styled-components';

export const ApoloSection = styled.section`
  width: 80vw;
  height: 80vh;
  position: absolute;
  border: solid black 1px;
  background-color: white;
`;

export const ApoloDivHeader = styled.div`
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
`;

export const DivApoloBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;  
`;

export const ApoloDivContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ApoloProducts = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
border: solid black 2px;
border-radius: 10%;
margin: 1vh;
width: 30%;
flex-grow: 1;
height: 50%;
button {
  width: 80%;
  height: 15%;
}
`;

// mobile

export const ApoloSectionMobile = styled.section`
  width: 80vw;
  height: 80vh;
  position: absolute;
  border: solid black 1px;
  background-color: white;
`;

export const DivApoloBoxMobile = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;  
`;

export const ApoloDivContentMobile = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ApoloProductsMobile = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
border: solid black 2px;
border-radius: 10%;
margin: 1vh;
width: 90%;
height: 50%;
button {
  width: 80%;
  height: 15%;
}
`;
