import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail-card">
      <h1 className="item-detail-title">{item.name}</h1>
      <p className="item-detail-description">{item.description}</p>
      <p className="item-detail-price">${item.price}</p>
      <div className="item-detail-actions">
        {}
        <p>Boton para agregar al carrito</p>
      </div>
    </div>
  );
};

export default ItemDetail;