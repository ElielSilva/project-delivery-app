import React from 'react';
// import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function HeaderOrdersDetails({ id, status, saleDate }) {
  // const x = saleDate;
  // console.log(x);

  return (
    <main>
      <p
        data-testid={ `seller_order_details__element-order-details-label-order-${id}` }
      >
        {id}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {new Date(saleDate).toLocaleDateString()}
      </p>
      <button
        type="button"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </button>
      <button type="button" data-testid="seller_order_details__button-preparing-check">
        preparar pedido
      </button>
      <button type="button" data-testid="seller_order_details__button-dispatch-check">
        saiu pra entrega
      </button>
    </main>

  );
}

HeaderOrdersDetails.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

// - 53: seller_order_details__element-order-details-label-order-id
// - 54: seller_order_details__element-order-details-label-delivery-status
// - 55: seller_order_details__element-order-details-label-order-date
// - 56: seller_order_details__button-preparing-check
// - 57: seller_order_details__button-dispatch-check
