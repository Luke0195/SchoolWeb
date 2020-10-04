import React from 'react';
import { Container } from '../../styles/GlobalStyled';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small> Olá </small>
      </Title>
      <Paragrafo> Lorem ipsum dolor sit amet </Paragrafo>
      <button type="button"> Salvar</button>
    </Container>
  );
}
