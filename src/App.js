import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Component/NavBar';
import { FetchProduct } from './Component/FetchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './Component/Cart';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]); 
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/product' element={<FetchProduct addToCart={addToCart} />} />
          <Route path='/addtocart' element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
