import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import { PropTypes } from 'prop-types';

export default function NavBar() {
  const [name, setName] = useState('');

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    setName(userStorage.name);
  }, []);

  function btnQuit() {
    localStorage.setItem('user', '');
    Navigate('/');
  }

  return (
    <div>
      <div>
        <p data-testid="customer_products__element-navbar-link-products">Produtos</p>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
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
          onClick={ () => btnQuit }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

// NavBar.propTypes = {
//   pedidos: PropTypes.number,
//   nome: PropTypes.string,
// };
