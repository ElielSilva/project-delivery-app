import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRequest } from '../../services/request';

export default function Orders() {
  const [order, setOrder] = useState([]);
  const { pathname } = useLocation();
  const orderId = pathname.split('/')[3];

  useEffect(() => {
    async function getOrders() {
      const myOrders = await getRequest(`sales/orders/${orderId}`);
      setOrder(myOrders);
    }
    getOrders();
  }, [orderId]);

  return (
    <div>
      {console.log(order)}
      <h1>{`Order: ${orderId}`}</h1>
    </div>
  );
}
