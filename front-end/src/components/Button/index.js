import React, {
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';

export default function Button() {
  const { TotalPrice } = useContext(ShoppingContext);
  const navigate = useNavigate();

  function btnCarShop() {
    navigate('/customer/checkout');
  }

  return (
    <button
      type="button"
      data-testid="customer_products__checkout-bottom-value"
      onClick={ () => { btnCarShop(); } }
    >
      {TotalPrice}
    </button>
  );
}
