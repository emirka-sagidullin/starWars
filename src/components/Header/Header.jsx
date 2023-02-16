import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/people">Люди</Link>
        </li>
        <li>
          <Link to="/planets">Планеты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
