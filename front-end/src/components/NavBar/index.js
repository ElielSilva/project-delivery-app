import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
// import { PropTypes } from 'prop-types';

export default function NavBar() {
  const [name, setName] = useState('');
  const { setTotalPrice } = useContext(ShoppingContext);

  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    setName(userStorage.name);
  }, []);

  function btnQuit() {
    setTotalPrice(0);
    localStorage.clear();
    navigate('/');
  }

  function btnProducts() {
    navigate('/customer/products');
  }

  function btnCustomerCheckout() {
    navigate('/customer/checkout');
  }

  return (
    <div>
      <div>
        <p data-testid="customer_products__element-navbar-link-products">
          <button
            type="button"
            label="sair"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => btnProducts() }
          >
            Produtos
          </button>
        </p>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-link-orders">
          <button
            type="button"
            label="sair"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => btnCustomerCheckout() }
          >
            Meus Pedidos
          </button>
        </p>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">
          {name}
        </p>
      </div>
      <div>
        <button
          type="button"
          label="sair"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => btnQuit() }
        >
          Sair
        </button>
      </div>
    </div>
  );
}
