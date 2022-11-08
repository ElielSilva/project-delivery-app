import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function HeaderTable({ productsData }) {
  const [total, setTotal] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  useEffect(() => {
    const totalValue = products
      .reduce((acc, cv) => acc + (cv.price * cv.quantity), 0)
      .toFixed(2);
    setTotal(totalValue);
  }, [products, productsData]);

  // function removeItem(index) {
  //   const newProducts = products.filter((_prod, i) => i !== index);
  //   localStorage.setItem('shoppingCart', JSON.stringify(newProducts));
  //   setProducts(newProducts);
  // }

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
          {products.map(({ name, quantity, price }, i) => (
            <tr key={ i }>

              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${i}`
                }
              >
                { i + 1}
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${i}`
                }
              >
                { name }
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${i}`
                }
              >
                { quantity }
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${i}`
                }
              >
                { price.toFixed(2).replace('.', ',') }
              </td>

              <td
                data-testid={ `seller_order_details__element-order-table-sub-total-${i}` }
              >
                { `R$ ${(quantity * price).toFixed(2).replace('.', ',')}` }
              </td>

              {/* <td data-testid={ `customer_checkout__element-order-table-remove-${i}` }>
                <button
                  type="button"
                  onClick={ () => removeItem(i) }
                >
                  Remover
                </button>
              </td> */}
            </tr>
          ))}
        </tfoot>
      </table>
      <div>
        <h2 data-testid="seller_order_details__element-order-total-price">
          Total: R$
          { total }
        </h2>

      </div>
    </div>
  );
}

HeaderTable.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    }),
  ).isRequired,
};

// - 58: seller_order_details__element-order-table-item-number-<index>
// - 59: seller_order_details__element-order-table-name-<index>
// - 60: seller_order_details__element-order-table-quantity-<index>
// - 61: seller_order_details__element-order-table-unit-price-<index>
// - 62: seller_order_details__element-order-table-sub-total-<index>
// - 63: seller_order_details__element-order-total-price
