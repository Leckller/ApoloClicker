import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';

function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0%;
      box-sizing: border-box;
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
