import React, { useState, useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';
import {
  // checkExistStorage,
  incrementProductStorage,
  decrementProductStorage,
} from '../../services/storage';
import { ShoppingContext } from '../../context/ShoppingContext';

export default function ProductCard({ id, price, image, name }) {
  const [quantidade, setQuantidade] = useState(0);
  const { setTotalPrice } = useContext(ShoppingContext);

  useEffect(() => {
    // checkExistStorage();
    const productsStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    console.log(productsStorage);
    const productsExists = productsStorage.filter((products) => products.id === id);
    if (!productsExists) setQuantidade(productsExists[0].quantity);
  }, [id]);

  function addTotalPrice() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const shoppingCartSome = shoppingCart.reduce((acc, curr) => {
      const subTotal = parseFloat(String(curr.subTotal)
        .replace(',', '.'));
      return acc + subTotal;
    }, 0.00).toFixed(2);
    setTotalPrice(shoppingCartSome || '00,00');
  }

  function incrementProduct() {
    setQuantidade(quantidade + 1);
    const productInfo = { id, name, price };
    incrementProductStorage(productInfo);
    addTotalPrice();
  }

  function decrementProduct() {
    setQuantidade(quantidade - 1);
    const productInfo = { id };
    decrementProductStorage(productInfo);
    addTotalPrice();
  }

  return (
    <div>
      <div>
        <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ image }
          alt={ name }
        />
      </div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => incrementProduct() }
      >
        +
      </button>
      <input
        type="number"
        value={ quantidade }
        onChange={ ({ target }) => setQuantidade(target.value) }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />

      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
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

// customer_products__img-card-bg-image-<id>
// - 18: customer_products__button-card-add-item-<id>
// - 19: customer_products__button-card-rm-item-<id>
// - 20: customer_products__input-card-quantity-<id></id>
