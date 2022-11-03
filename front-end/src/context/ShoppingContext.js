// import React, { createContext, useState } from 'react';
// import PropTypes from 'prop-types';

// export const ShoppingContext = createContext();

// export function ShoppingProvider({ children }) {
//   const [TotalPrice, setTotalPrice] = useState('0,00');
//   // const [filteredResults, setFilteredResults] = useState([]);
//   const TotalPriceCart = useMemo(() => ({
//     TotalPrice, setTotalPrice,
//   }), [TotalPrice]);

//   // const context = {
//   //   TotalPrice,
//   //   setTotalPrice,
//   // };

//   return (
//     <ShoppingContext.Provider value={ TotalPriceCart }>
//       {children}
//     </ShoppingContext.Provider>
//   );
// }

// ShoppingContext.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };
