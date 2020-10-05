import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/" target="_blank">
        <FaHome size={24} />
      </Link>
      <Link to="/login" target="_blank">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/" target="_blank">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
