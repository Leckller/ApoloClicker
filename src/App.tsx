import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';

function App() {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&family=Roboto:wght@300&family=Satisfy&family=Shadows+Into+Light&display=swap');
    *{
      margin: 0;
      padding: 0%;
      box-sizing: border-box;
      font-family: 'Pixelify Sans', cursive;
      letter-spacing: 1px;
    }
    body{
      background-color: #323c39;
    }
    button {
      cursor: pointer;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
