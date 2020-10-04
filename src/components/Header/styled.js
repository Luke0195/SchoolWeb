import styled from 'styled-components';
import { primaryColor } from '../../config/color';

export const Nav = styled.nav`
  width: 100%;
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    margin: 0 10px;
    font-weight: bold;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }
`;
