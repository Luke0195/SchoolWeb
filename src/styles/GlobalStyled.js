import styled, { createGlobalStyle } from 'styled-components';

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
  background-color: #7159c1;
}

button{
  cursor: pointer;
}

a{
 text-decoration: none;
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
