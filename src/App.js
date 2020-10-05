import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyled';
import HeaderComponent from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}
