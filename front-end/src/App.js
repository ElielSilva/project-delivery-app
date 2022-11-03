import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { ShoppingContext } from './context/ShoppingContext';
import Costumer from './pages/Costumer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    // <ShoppingContext.Consumer>
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Costumer /> } />
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
    </Routes>
    // </ShoppingContext.Consumer>
  );
}

export default App;
