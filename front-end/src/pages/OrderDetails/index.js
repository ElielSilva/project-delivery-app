// import React, { useState, useEffect } from 'react';
// import { getRequest } from '../../services/request';
// import NavBar from '../../components/NavBar';

// export default function OrderDetails() {
//   const [pedidos, setPedidos] = useState([]);

//   useEffect(() => {
//     async function requestOrders() {
//       const allOrders = await requestData('/seller/orders');
//     }
//     requestOrders();
//   }, []);

//   return (
//     <>
//       <NavBar />
//       <div>
//         <h2> Detalhe do Pedido</h2>
//         <div>
//           <p> Pedido Number</p>
//           <p> Data Criação</p>
//           <p> Status Pedido</p>
//           <p> Preparar Pedido</p>
//           <p> Saiu para entrega </p>
//         </div>
//       </div>
//     </>
//   );
// }
