import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ShoppingContext } from '../../context/ShoppingContext';
import testIds from '../../testIds';

export default function NavBar({ myOrders }) {
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

  function btnCustomerOrders() {
    navigate('/customer/orders');
  }

  return (
    <div>
      <div>
        <p data-testid={ testIds[11] }>
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
      { myOrders
      && (
        <div>
          <p data-testid={ testIds[12] }>
            <button
              type="button"
              label="sair"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => btnCustomerOrders() }
            >
              Meus Pedidos
            </button>
          </p>
        </div>
      )}
      <div>
        <p data-testid={ testIds[13] }>
          {name}
        </p>
      </div>
      <div>
        <button
          type="button"
          label="sair"
          data-testid={ testIds[14] }
          onClick={ () => btnQuit() }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  myOrders: true,
};

NavBar.propTypes = {
  myOrders: PropTypes.bool,
};
