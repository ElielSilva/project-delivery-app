import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { getRequest } from '../../services/request';
import OrderDetailTable from './OrderDetailTable';
import { ShoppingContext } from '../../context/ShoppingContext';
import testIds from '../../testIds';

export default function OrderDetail() {
  const [reload, setReload] = useState(false);
  const [order, setOrder] = useState();
  const [seller, setSeller] = useState();
  const [delivered, setDelivered] = useState(false);
  const { employees } = useContext(ShoppingContext);

  const { id: orderId } = useParams();

  useEffect(() => {
    async function getOrders() {
      const myOrder = await getRequest(`sales/orders/${orderId}`);
      const findSeller = employees.find((s) => s.id === myOrder.sellerId);
      setOrder(myOrder);
      setSeller(findSeller);
    }
    getOrders();
  }, [orderId, employees]);

  useEffect(() => {
    if (order && order.status === 'Em Trânsito') setDelivered(true);
    setReload(false);
  }, [orderId, employees, reload, order]);

  async function btnChangeStatus() {
    await patchRequest(`/sales/status/${orderId}/Entregue`);
    setReload(true);
  }

  return (
    <div>
      <NavBar />
      {order
        && seller
        && (
          <>
            <div>
              <p data-testid={ testIds[37] }>{`PEDIDO ${orderId}`}</p>
              <p data-testid={ testIds[38] }>{ seller.name }</p>
              <p data-testid={ testIds[39] }>
                { new Date(order.saleDate).toLocaleDateString() }
              </p>
              <p data-testid={ testIds[40] }>{ order.status }</p>
              <button
                data-testid={ testIds[47] }
                type="button"
                disabled={ !delivered }
                onClick={ () => btnChangeStatus() }
              >
                MARCAR COMO ENTREGUE
              </button>
            </div>

            <OrderDetailTable
              productsData={ order.products }
              totalPrice={ order.totalPrice }
            />
          </>
        )}
    </div>
  );
}
