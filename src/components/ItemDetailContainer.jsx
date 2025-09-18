import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const productos = [
  { id: 1, name: "Remera", category: "ropa", price: 20000, description: "Remera de algodón de alta calidad con estampado exclusivo.", stock: 5 },
  { id: 2, name: "Pantalón", category: "ropa", price: 35000, description: "Pantalón de jean ajustado, ideal para uso diario.", stock: 3 },
  { id: 3, name: "Zapatillas", category: "calzado", price: 60000, description: "Zapatillas deportivas con suela antideslizante y diseño moderno.", stock: 8 },
  { id: 4, name: "Gorra", category: "accesorios", price: 8000, description: "Gorra de béisbol con logo bordado, disponible en varios colores.", stock: 12 },
  { id: 5, name: "Buzos", category: "ropa", price: 45000, description: "Buzo con capucha, cómodo y abrigado para el invierno.", stock: 7 }
];

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(p => p.id === parseInt(itemId, 10)));
      }, 2000); 
    });

    fetchItem.then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <h1>Cargando producto...</h1>}
    </div>
  );
};

export default ItemDetailContainer;
