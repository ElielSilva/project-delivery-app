import React from 'react';
// import { PropTypes } from 'prop-types';

export default function NavBar() {
  return (
    <div>
      <div>
        <p datatest-id="customer_products__element-navbar-link-products">Produtos</p>
      </div>
      <div>
        <p datatest-id="customer_products__element-navbar-link-orders">
          Meus Pedidos
          {' '}
          pedidos
        </p>
      </div>
      <div>
        <p datatest-id="customer_products__element-navbar-user-full-name">
          nome
        </p>
      </div>
      <div>
        <button
          type="button"
          label="sair"
          datatest-id="customer_products__element-navbar-link-logout"
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
