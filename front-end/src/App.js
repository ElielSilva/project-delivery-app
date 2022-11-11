import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { ShoppingContext } from './context/ShoppingContext';
import Costumer from './pages/Costumer';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerCheckout from './pages/CustomerCheckout';
import CostumerOrderDetail from './pages/CostumerOrderDetail';
import SellerOrderDetail from './pages/SellerOrderDetail';
import CustomerOrders from './pages/CustomerOrders';
import SellerOrders from './pages/SellerOrders';
import './App.css';
import AdminManager from './pages/AdminManager';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer" element={ <Costumer /> } />
        <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
        <Route exact path="/customer/products" element={ <Costumer /> } />
        <Route path="/customer/orders/:id" element={ <CostumerOrderDetail /> } />
        <Route exact path="/customer/orders" element={ <CustomerOrders /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route exact path="/seller/orders/:id" element={ <SellerOrderDetail /> } />
        <Route exact path="/admin/manage" element={ <AdminManager /> } />
        <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      </Routes>
    </div>
  );
}

export default App;
