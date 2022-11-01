import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function ProductCard({ id, price, image, name }) {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div datatest-id={ `customer_products__element-card-title-${id}` }>
      <div>
        <p datatest-id={ `customer_products__element-card-price-${id}` }>{price}</p>
        <img src={ image } alt={ name } />
      </div>
      <p>{name}</p>
      <button type="button" onClick={ () => setQuantidade(quantidade + 1) }>
        +
      </button>
      <p>
        {quantidade}
      </p>
      <button
        type="button"
        onClick={ quantidade === 0
          ? null : () => setQuantidade(quantidade - 1) }
      >
        -
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
