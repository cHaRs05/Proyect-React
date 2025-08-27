
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const items = ["Remera", "Pantalón", "Zapatillas", "Gorra", "Buzos"];

  return (
    <div className="item-list-container">
      <h1 className="greeting-title">{greeting}</h1>
      <p className="greeting-text">Explora nuestra increíble colección de productos.</p>
      <div className="item-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <h2 className="item-title">{item}</h2>
            <p className="item-description">Descripción del producto</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
