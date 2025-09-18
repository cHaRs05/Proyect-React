import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div className="item-grid">
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="item-card">
            <h2 className="item-title">{item.name}</h2>
            <p className="item-description">{item.description}</p>
            <p className="item-price">${item.price}</p>
            <Link to={`/item/${item.id}`} className="item-link">Ver Detalle</Link>
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;
