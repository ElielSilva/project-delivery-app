import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function Orders({ id, status, saleDate, totalPrice, deliveryAddress }) {
  // const x = saleDate;
  // console.log(x);

  return (
    <Link to={ `/seller/orders/${id}` }>
      <main>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{id}</p>
        <button
          type="button"
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {status}
        </button>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>
          {new Date(saleDate).toLocaleDateString()}
        </p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>
          R$
          {' '}
          {totalPrice.toFixed(2).replace('.', ',')}
        </p>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          {(deliveryAddress)}
        </p>
      </main>
    </Link>
  );
}

Orders.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
};
