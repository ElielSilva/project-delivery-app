import React from 'react';
import { PropTypes } from 'prop-types';

// [
//   {
//     "id": 1,
//     "userId": 3,
//     "sellerId": 2,
//     "totalPrice": "11.90",
//     "deliveryAddress": "rua do fim, bairo nova vida, numero 7",
//     "deliveryNumber": "(99) 99999-9999",
//     "saleDate": "2002-10-15",
//     "status": "pending"
//   }
// ]

export default function Orders({ id, status, saleDate, totalPrice, deliveryAddress }) {
  const x = saleDate;
  console.log(x);
  return (
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
        {totalPrice}
      </p>
      <p data-testid={ `seller_orders__element-card-address-${id}` }>
        {(deliveryAddress)}
      </p>
    </main>
  );
}

Orders.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
};
