import React, { createContext, useState, useMemo } from 'react';
// import PropTypes from 'prop-types';

export const ShoppingContext = createContext();

export function ShoppingProvider(palitinho) {
  const [TotalPrice, setTotalPrice] = useState(0.00);
  const { children } = palitinho;
  // const [filteredResults, setFilteredResults] = useState([]);
  const TotalPriceCart = useMemo(() => ({
    TotalPrice, setTotalPrice,
  }), [TotalPrice]);

  return (
    <ShoppingContext.Provider value={ TotalPriceCart }>
      {children}
    </ShoppingContext.Provider>
  );
}

// ShoppingContext.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };
