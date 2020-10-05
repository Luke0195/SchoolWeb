import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyled';
import HeaderComponent from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes />
        <GlobalStyles />
      </Router>
    </>
  );
}
