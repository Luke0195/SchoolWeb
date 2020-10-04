import React from 'react';

import GlobalStyles from './styles/GlobalStyled';
import HeaderComponent from './components/Header';
import LoginPage from './pages/Login';

export default function App() {
  return (
    <>
      <HeaderComponent />
      <LoginPage />
      <GlobalStyles />
    </>
  );
}
