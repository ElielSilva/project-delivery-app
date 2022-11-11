import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import OrdersDetailsTable from '../../components/OrdersDetailsTable';
import HeaderOrdersDetails from '../../components/HeaderOrdersDetails';
import { getRequest, setToken } from '../../services/request';

export default function OrdersDetails() {
  const [userData, setUserData] = useState();
  const { id } = useParams();
  // console.log('id do use params == ', id);

  useEffect(() => {
    async function getDetailsProducts() {
      const { token } = JSON.parse(localStorage.getItem('user'));
      // console.log(token);
      setToken(token);
      const [data] = await getRequest(`/sales/sellers/${id}`);
      // console.log('data === id ', data.id, data.status, data.saleDate);
      setUserData(data);
      // console.log('data === state ', userData.id);
    }
    getDetailsProducts();
    // console.log('data === state ', userData.id);
  }, [id]);
  // console.log(userData.id);
  return (
    <main>
      <NavBar />
      {userData && <HeaderOrdersDetails
        saleId={ userData.id }
        status={ userData.status }
        saleDate={ userData.saleDate }
      />}
      {userData && userData.products.length > 0
        && <OrdersDetailsTable
          productsData={ userData.products }
          totalPrice={ userData.totalPrice }
        />}
    </main>
  );
}

// - 53: seller_order_details__element-order-details-label-order-id
// - 54: seller_order_details__element-order-details-label-delivery-status
// - 55: seller_order_details__element-order-details-label-order-date
// - 56: seller_order_details__button-preparing-check
// - 57: seller_order_details__button-dispatch-check
