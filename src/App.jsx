import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda!" />
    </div>
  );
};

export default App;