import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../../components/NavBar';
import { getRequest, setToken } from '../../services/request';
import { ShoppingContext } from '../../context/ShoppingContext';
import BoxOrders from './BoxOrders';
// import testIds from '../../testIds';

export default function CustomerOrders() {
  const [orders, setOrders] = useState();
  const { user } = useContext(ShoppingContext);

  useEffect(() => {
    async function getUserOrders() {
      try {
        setToken(user.token);
        const userOrders = await getRequest('/customers/orders');
        setOrders(userOrders || []);
      } catch (err) {
        console.log(err);
      }
    }
    if (user) getUserOrders();
  }, [user]);

  return (
    <div>
      <NavBar />
      {
        orders
        && (
          <div>
            <BoxOrders orders={ orders } />
          </div>)
      }
    </div>
  );
}
