import React, { useState, useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';
import {
  // checkExistStorage,
  incrementProductStorage,
  decrementProductStorage,
  incrementInputStorage,
} from '../../services/storage';
import { ShoppingContext } from '../../context/ShoppingContext';
import './index.css';

export default function ProductCard({ id, price, image, name }) {
  const [quantidade, setQuantidade] = useState(0);
  const { setTotalPrice } = useContext(ShoppingContext);

  useEffect(() => {
    // checkExistStorage();
    const productsStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const productsExists = productsStorage.filter((products) => products.id === id);
    if (!productsExists) setQuantidade(productsExists[0].quantity);
  }, [id]);

  function addTotalPrice() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    // console.log(shoppingCart);
    const shoppingCartSome = shoppingCart.reduce(
      (acc, curr) => acc + curr.subTotal,
      0.00,
    );
    setTotalPrice(shoppingCartSome || 0.00);
  }

  function incrementInput(value) {
    const quantity = value > 0 ? value : 0;
    setQuantidade(quantity);
    const productInfo = { id, name, price, quantity };
    incrementInputStorage(productInfo);
    addTotalPrice();
  }

  function incrementProduct() {
    setQuantidade(quantidade + 1);
    const productInfo = { id, name, price };
    console.log(productInfo);
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
    <main>
      <div>
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          {String(price.toFixed(2)).replace('.', ',')}
        </p>
        <img
          id="image"
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
        onChange={ ({ target }) => incrementInput(target.value) }
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
    </main>
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
