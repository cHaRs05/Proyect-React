import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">Mi Tienda</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/category/ropa" className="nav-link">Ropa</Link>
          <Link to="/category/calzado" className="nav-link">Calzado</Link>
          <Link to="/category/accesorios" className="nav-link">Accesorios</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
