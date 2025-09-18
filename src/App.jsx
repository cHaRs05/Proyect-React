import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
    </>
  );
};

export default App;

