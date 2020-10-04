import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="#" target="_blank">
        <FaHome size={24} />
      </a>
      <a href="#" target="_blank">
        <FaUserAlt size={24} />
      </a>
      <a href="#" target="_blank">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
