import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import HeaderTable from '../../components/HeaderTable';
import HeaderOrdersDetails from '../../components/HeaderOrdersDetails';
import { getRequest, setToken } from '../../services/request';

export default function OrdersDetails() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function getDetailsProducts() {
      const { token } = JSON.parse(localStorage.getItem('user'));
      setToken(token);
      const data = await getRequest('/sales/sellers');
      console.log(data);
      setUserData(data);
    }
    getDetailsProducts();
  }, []);

  return (
    <main>
      <NavBar />
      <HeaderOrdersDetails
        id={ userData.id }
        status={ userData.status }
        saleDate={ userData.saleDate }
      />
      {userData.products.length > 0
        && <HeaderTable productsData={ userData.products } />}
    </main>
  );
}

// - 53: seller_order_details__element-order-details-label-order-id
// - 54: seller_order_details__element-order-details-label-delivery-status
// - 55: seller_order_details__element-order-details-label-order-date
// - 56: seller_order_details__button-preparing-check
// - 57: seller_order_details__button-dispatch-check

// const userData = {
//   id: 1,
//   userId: 3,
//   sellerId: 2,
//   totalPrice: '11.90',
//   deliveryAddress: 'rua do fim, bairo nova vida, numero 7',
//   deliveryNumber: '(99) 99999-9999',
//   saleDate: '2002-10-15',
//   status: 'pending',
//   products: [
//     {
//       item: 1,
//       name: 'skol 250ml',
//       quantity: 2,
//       price: 2.20,
//     },
//     {
//       item: 1,
//       name: 'skol 250ml',
//       quantity: 2,
//       price: 2.20,
//     },
//   ],
// };
