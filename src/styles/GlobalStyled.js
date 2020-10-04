import styled, { createGlobalStyle } from 'styled-components';
import {
  errorColor,
  infoColor,
  primaryColor,
  primaryDarkColor,
  sucessColor,
  warningColor,
} from '../config/color';

export default createGlobalStyle`


*{
  padding:0%;
  margin:0;
  outline:0;
  box-sizing:border-box;
}

html, body, #root{
  height: 100%;
}

body{
  text-rendering:optimizeLegibility;
  --webkit-font-smoothing: antialiased !important;
  background-color: ${primaryDarkColor};
}

button{
  cursor: pointer;
  background-color: ${primaryColor};
  color:#fff;
  border: 0;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a{
 text-decoration: none;
 color: ${primaryColor};
}

ul{
  list-style-type: none;
}
`;

export const Container = styled.section`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  margin: 30px auto;
`;
