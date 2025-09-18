import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const productos = [
  { id: 1, name: "Remera", category: "ropa", price: 20000, description: "Remera de algodón", stock: 5 },
  { id: 2, name: "Pantalón", category: "ropa", price: 35000, description: "Pantalón de jean", stock: 3 },
  { id: 3, name: "Zapatillas", category: "calzado", price: 60000, description: "Zapatillas deportivas", stock: 8 },
  { id: 4, name: "Gorra", category: "accesorios", price: 8000, description: "Gorra de béisbol", stock: 12 },
  { id: 5, name: "Buzos", category: "ropa", price: 45000, description: "Buzo con capucha", stock: 7 }
];

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
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
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
