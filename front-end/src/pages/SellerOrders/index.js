import React, { useEffect, useContext } from 'react';
import NavBar from '../../components/NavBar';
import Orders from '../../components/Orders';
import { requestData } from '../../services/fetchLogin';
import { ShoppingContext } from '../../context/ShoppingContext';

export default function SellerOrders() {
  const { sellerAllOrders, setSellerAllOrders } = useContext(ShoppingContext);

  useEffect(() => {
    async function requestOrders() {
      const data = await requestData('/sales/sellers');
      const { token } = JSON.parse(localStorage.getItem('user'));
      setToken(token);
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
