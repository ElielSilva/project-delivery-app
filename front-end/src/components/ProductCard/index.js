import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import {
  // checkExistStorage,
  incrementProductStorage,
  decrementProductStorage,
} from '../../services/storage';

export default function ProductCard({ id, price, image, name }) {
  const [quantidade, setQuantidade] = useState(0);

  // shoppingCart

  useEffect(() => {
    // checkExistStorage();
    const productsStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    console.log(productsStorage);
    const productsExists = productsStorage.filter((products) => products.id === id);
    if (!productsExists) setQuantidade(productsExists[0].quantity);
  }, [id]);

  function incrementProduct() {
    setQuantidade(quantidade + 1);
    const productInfo = { id, name, price };
    incrementProductStorage(productInfo);
  }

  function decrementProduct() {
    setQuantidade(quantidade - 1);
    const productInfo = { id };
    decrementProductStorage(productInfo);
  }

  return (
    <div datatest-id={ `customer_products__element-card-title-${id}` }>
      <div>
        <p datatest-id={ `customer_products__element-card-price-${id}` }>{price}</p>
        <img src={ image } alt={ name } />
      </div>
      <p>{name}</p>
      <button type="button" onClick={ () => incrementProduct() }>
        +
      </button>
      <p>
        {quantidade}
      </p>
      <button
        type="button"
        onClick={ quantidade === 0
          ? null : () => decrementProduct() }
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
