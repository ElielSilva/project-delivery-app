import React, { createContext, useState, useMemo, useEffect } from 'react';
import { requestData } from '../services/fetchLogin';
// import PropTypes from 'prop-types';

export const ShoppingContext = createContext();

export function ShoppingProvider(childrens) {
  const [TotalPrice, setTotalPrice] = useState(0.00);
  const [employees, setEmployees] = useState([{ name: '', userId: '' }]);
  const [user, setUser] = useState({});

  const { children } = childrens;

  useEffect(() => {
    const setInitialState = async () => {
      try {
        const allEmployees = await requestData('/employees');
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
    TotalPrice, setTotalPrice, employees, user,
  }), [TotalPrice, employees, user]);

  return (
    <ShoppingContext.Provider value={ TotalPriceCart }>
      {children}
    </ShoppingContext.Provider>
  );
}

// ShoppingContext.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };
