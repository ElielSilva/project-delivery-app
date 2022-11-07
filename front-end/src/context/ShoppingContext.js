import React, { createContext, useState, useMemo } from 'react';
// import PropTypes from 'prop-types';

export const ShoppingContext = createContext();

export function ShoppingProvider(childrens) {
  const [TotalPrice, setTotalPrice] = useState(0.00);
  const [sellerAllOrders, setSellerAllOrders] = useState([]);
  const { children } = childrens;
  const TotalPriceCart = useMemo(() => ({
    TotalPrice, setTotalPrice, sellerAllOrders, setSellerAllOrders,
  }), [TotalPrice, sellerAllOrders]);

  return (
    <ShoppingContext.Provider value={ TotalPriceCart }>
      {children}
    </ShoppingContext.Provider>
  );
}

// ShoppingContext.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };
