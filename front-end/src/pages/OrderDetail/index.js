import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { getRequest } from '../../services/request';
import OrderDetailTable from './OrderDetailTable';
import { ShoppingContext } from '../../context/ShoppingContext';
import testIds from '../../testIds';

export default function OrderDetail() {
  const [order, setOrder] = useState();
  const [seller, setSeller] = useState();
  const { employees } = useContext(ShoppingContext);

  const { id: orderId } = useParams();

  useEffect(() => {
    async function getOrders() {
      const myOrders = await getRequest(`sales/orders/${orderId}`);
      const findSeller = employees.find((s) => s.id === myOrders.sellerId);
      setOrder(myOrders);
      setSeller(findSeller);
    }
    getOrders();
  }, [orderId, employees]);

  return (
    <div>
      <NavBar />
      {!order
        ? (<h3>Carregando</h3>)
        : (
          <>
            {!seller
              ? (<h3>Carregando</h3>)
              : (
                <div>
                  <p data-testid={ testIds[37] }>{`PEDIDO ${orderId}`}</p>
                  <p data-testid={ testIds[38] }>{ seller.name }</p>
                  <p data-testid={ testIds[39] }>
                    { new Date(order.saleDate).toLocaleDateString() }
                  </p>
                  <p data-testid={ testIds[40] }>{ order.status }</p>
                  <button data-testid={ testIds[47] } type="button">
                    MARCAR COMO ENTREGUE
                  </button>
                </div>
              )}

            <OrderDetailTable
              productsData={ order.products }
              totalPrice={ order.totalPrice }
            />
          </>
        )}
    </div>
  );
}
