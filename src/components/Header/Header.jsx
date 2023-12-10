import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <Link to="/" className='header'> 🎭 Event-XL 🎬 </Link>
    </div>
  )
}

export default Header;
