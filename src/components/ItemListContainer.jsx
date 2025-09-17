import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const productos = [
  { id: 1, name: "Remera", category: "ropa", price: 20000, description: "Remera de algodón" },
  { id: 2, name: "Pantalón", category: "ropa", price: 35000, description: "Pantalón de jean" },
  { id: 3, name: "Zapatillas", category: "calzado", price: 60000, description: "Zapatillas deportivas" },
  { id: 4, name: "Gorra", category: "accesorios", price: 8000, description: "Gorra de béisbol" },
  { id: 5, name: "Buzos", category: "ropa", price: 45000, description: "Buzo con capucha" }
];

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simulacion de una llamada a una API 
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000); 
    });

    fetchItems.then((data) => {
      if (categoryId) {
        const filteredItems = data.filter(item => item.category === categoryId);
        setItems(filteredItems);
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1 className="greeting-title">{greeting}</h1>
      <p className="greeting-text">Explora nuestra increíble colección de productos.</p>
      {/*ItemList recibe la lista*/}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
