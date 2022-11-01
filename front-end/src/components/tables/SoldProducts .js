import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function SoldProducts({ tableData }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    const totalValue = tableData
      .reduce((acc, cv) => acc + (cv.price * cv.quantity), 0)
      .toFixed(2);
    setTotal(totalValue);
  }, [tableData]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tfoot>
          {tableData.map(({ name, quantity, price }, i) => (
            <tr key={ i }>
              <td>{ i }</td>
              <td>{ name }</td>
              <td>{ quantity }</td>
              <td>{ price.toFixed(2) }</td>
              <td>{ `R$ ${(quantity * price).toFixed(2)}` }</td>
            </tr>
          ))}
        </tfoot>
      </table>
      <div>
        <h2>
          Total: R$
          { total }
        </h2>
      </div>
    </div>
  );
}

SoldProducts.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    }),
  ).isRequired,
};
