import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#" className="nav-logo">Mi Tienda</a>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Productos</a>
          <a href="#" className="nav-link">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;