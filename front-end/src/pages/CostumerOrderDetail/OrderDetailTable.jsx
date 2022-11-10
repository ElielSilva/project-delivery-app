import PropTypes from 'prop-types';
import testIds from '../../testIds';

export default function SoldProducts({ productsData, totalPrice }) {
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
          {productsData.map(({ name, salesProducts, price }, i) => (
            <tr key={ i }>

              <td data-testid={ `${testIds[41]}${i}` }>
                { i + 1}
              </td>

              <td data-testid={ `${testIds[42]}${i}` }>
                { name }
              </td>

              <td data-testid={ `${testIds[43]}${i}` }>
                { salesProducts.quantity }
              </td>

              <td data-testid={ `${testIds[44]}${i}` }>
                { price.toFixed(2).replace('.', ',') }
              </td>

              <td data-testid={ `${testIds[45]}${i}` }>
                { `R$ ${(salesProducts.quantity * price).toFixed(2).replace('.', ',')}` }
              </td>

            </tr>
          ))}
        </tfoot>
      </table>
      <div>
        <h2 data-testid={ `${testIds[46]}` }>
          Total: R$
          { totalPrice.replace('.', ',') }
        </h2>

      </div>
    </div>
  );
}

SoldProducts.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      salesProducts: PropTypes.shape({
        quantity: PropTypes.number,
        saleId: PropTypes.number,
      }),
    }),
  ).isRequired,
  totalPrice: PropTypes.string.isRequired,
};
