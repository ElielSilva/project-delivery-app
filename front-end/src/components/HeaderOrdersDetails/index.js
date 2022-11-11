import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { putRequest } from '../../services/request';

export default function HeaderOrdersDetails({ saleId, status, saleDate }) {
  const [Status, setStatus] = useState();
  // console.log(saleId);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  // useEffect(() => {
  //   setStatus(status);
  // }, [status]);

  async function btnChangeStatus(btnStatus) {
    if (Status !== btnStatus) {
      setStatus(btnStatus);
      // aqui ficará a requisição ao backend
      await putRequest(`/sales/sellers/${saleId}`, { status: btnStatus });
    }
  }

  return (
    <main>
      <p
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {saleId}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {new Date(saleDate).toLocaleDateString()}
      </p>
      <p
        type="button"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {Status}
      </p>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ Status !== 'Pendente' }
        onClick={ () => btnChangeStatus('Preparando') }
      >
        preparar pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ Status !== 'Preparando' }
        onClick={ () => btnChangeStatus('Em Trânsito') }
      >
        saiu pra entrega
      </button>
    </main>

  );
}

HeaderOrdersDetails.propTypes = {
  saleId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

// - 53: seller_order_details__element-order-details-label-order-id
// - 54: seller_order_details__element-order-details-label-delivery-status
// - 55: seller_order_details__element-order-details-label-order-date
// - 56: seller_order_details__button-preparing-check
// - 57: seller_order_details__button-dispatch-check
