import React, { useEffect, useContext } from 'react';
import NavBar from '../../components/NavBar';
import Orders from '../../components/Orders';
import { getRequest, setToken } from '../../services/request';
import { ShoppingContext } from '../../context/ShoppingContext';

export default function SellerOrders() {
  const { sellerAllOrders, setSellerAllOrders } = useContext(ShoppingContext);

  useEffect(() => {
    async function requestOrders() {
      const { token } = JSON.parse(localStorage.getItem('user'));
      // console.log(token);
      setToken(token);
      const data = await getRequest('/sales/sellers');
      setSellerAllOrders(data);
    }
    requestOrders();
  }, [setSellerAllOrders]);

  return (
    <main>
      <NavBar />

      <div>
        {
          sellerAllOrders.map((order, index) => (
            <Orders
              key={ index }
              id={ order.id }
              saleDate={ order.saleDate }
              totalPrice={ order.totalPrice }
              deliveryAddress={ order.deliveryAddress }
              status={ order.status }
            />
          ))
        }
      </div>
    </main>
  );
}
