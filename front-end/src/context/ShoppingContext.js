import React, { createContext, useState, useMemo, useEffect } from 'react';
import { getRequest } from '../services/request';
// import PropTypes from 'prop-types';

export const ShoppingContext = createContext();

export function ShoppingProvider(childrens) {
  const [TotalPrice, setTotalPrice] = useState(0.00);
<<<<<<< HEAD
  const [sellerAllOrders, setSellerAllOrders] = useState([]);
=======
  const [employees, setEmployees] = useState([{ name: '', userId: '' }]);
  const [user, setUser] = useState({});

>>>>>>> ada0bc139d292443b8d8f20334f5df13ef0f4441
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
    setUser(currentUser);
  }, []);

  const TotalPriceCart = useMemo(() => ({
<<<<<<< HEAD
    TotalPrice, setTotalPrice, sellerAllOrders, setSellerAllOrders,
  }), [TotalPrice, sellerAllOrders]);
=======
    TotalPrice, setTotalPrice, employees, user,
  }), [TotalPrice, employees, user]);
>>>>>>> ada0bc139d292443b8d8f20334f5df13ef0f4441

  return (
    <ShoppingContext.Provider value={ TotalPriceCart }>
      {children}
    </ShoppingContext.Provider>
  );
}

// ShoppingContext.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };
