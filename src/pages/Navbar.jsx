import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
    <p><Link className='logo' to="/">DevEasy AI</Link></p>
    <nav className='nav-items'>
      <p><Link to="/image">Image</Link></p>
      <p><Link to="/error">Error</Link></p>
      <p><Link to="/sql">Sql</Link></p>
    </nav>
    </header>
  );
}

export default Navbar;
