import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import testIds from '../../testIds';

export default function BoxOrders({ orders }) {
  const navigate = useNavigate();

  function btnOrderDetails(pathId) {
    navigate(`/customer/orders/${pathId}`);
  }
  return (
    orders.map(({ id, totalPrice, saleDate, status }, i) => (
      <button
        key={ id }
        className="btn-box-order"
        type="button"
        onClick={ () => btnOrderDetails(id) }
      >
        <div>
          <div data-testid={ `${testIds[33]}${i}` }>
            <p>Pedido</p>
            <p>{ id }</p>
          </div>

          <p data-testid={ `${testIds[34]}${i}` }>
            { status }
          </p>
          <p data-testid={ `${testIds[35]}${i}` }>
            { new Date(saleDate).toLocaleDateString() }
          </p>
          <p data-testid={ `${testIds[36]}${i}` }>
            { totalPrice.toFixed(2).replace('.', ',') }
          </p>
        </div>
      </button>

    ))
  );
}

BoxOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      totalPrice: PropTypes.number,
      saleDate: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};
