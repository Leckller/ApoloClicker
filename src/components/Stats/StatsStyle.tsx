import styled from 'styled-components';

export const StatsSection = styled.section`
  width: 80vw;
  height: 80vh;
  top: 19vh;
  position: absolute;
  border: solid black 1px;
  background-color: white;
  overflow-y: auto;
  article{
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    h2{
      padding: 15px;
    }
  }
`;
