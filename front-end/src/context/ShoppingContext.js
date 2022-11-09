import React, { createContext, useState, useMemo, useEffect } from 'react';
import { getRequest } from '../services/request';
// import PropTypes from 'prop-types';

export const ShoppingContext = createContext();

export function ShoppingProvider(childrens) {
  const [TotalPrice, setTotalPrice] = useState(0.00);
  const [sellerAllOrders, setSellerAllOrders] = useState([]);
  const [employees, setEmployees] = useState([{ name: '', userId: '' }]);
  const [user, setUser] = useState({});

  const { children } = childrens;

  useEffect(() => {
    const setInitialState = async () => {
      try {
        const allEmployees = await getRequest('/employees/sellers');
        setEmployees(allEmployees);
      } catch (err) {
        console.log(err);
      }
    };
    setInitialState();
    const currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log({ currentUser });
    setUser(currentUser);
  }, []);

  const TotalPriceCart = useMemo(() => ({
    TotalPrice,
    setTotalPrice,
    sellerAllOrders,
    setSellerAllOrders,
    employees,
    user,
    setUser,
  }), [TotalPrice, sellerAllOrders, user, employees]);
    // TotalPrice, setTotalPrice, employees, user,

  //   TotalPrice, setTotalPrice, employees, user, setUser,
  // }), [TotalPrice, employees, user]);

  return (
    <ShoppingContext.Provider value={ TotalPriceCart }>
      {children}
    </ShoppingContext.Provider>
  );
}

// ShoppingContext.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };
