import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Routes>
          {/* <Route 
            path="/" 
            element={
              <ProductPage 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
              />
            } 
          /> */}
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;