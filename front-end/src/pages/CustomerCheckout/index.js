import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
import SoldProductsTable from './table';
import NavBar from '../../components/NavBar';
import { ShoppingContext } from '../../context/ShoppingContext';

export default function CustomerCheckout() {
  const [products, setProducts] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({ address: '', number: '' });
  const [seller, setSeller] = useState({ name: '', id: '' });

  const { TotalPrice, setTotalPrice, employees, user } = useContext(ShoppingContext);

  useEffect(() => {
    if (employees) {
      const { name, userId } = employees[0];
      setSeller({ name, id: userId });
    }
  }, [employees]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    setProducts(cartItems || []);

    const totalPrice = cartItems
      .reduce((acc, cv) => acc + (cv.price * cv.quantity), 0);

    setTotalPrice(totalPrice);
  }, [setTotalPrice]);

  function finalizeOrder() {
    const { address, number } = deliveryAddress;

    const BodyData = {
      sellerId: seller,
      totalPrice: TotalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
    };

    console.log('finalizar compra', user, TotalPrice, BodyData);
  }

  return (
    <div>
      <NavBar />

      <div>
        <h1>Finalizar Pedido</h1>
        {
          products.length > 0
          && <SoldProductsTable
            productsData={ products }
            setProductsData={ setProducts }
          />
        }
      </div>

      <h3>Detalhes e Endereço para Entrega</h3>

      <div className="contain_address_detail">
        <label htmlFor="employee">
          P. Vendedor(a) Responsável:
          <select
            className="side_input"
            data-testid="customer_checkout__select-seller"
            name="employee"
            id="employee"
            onChange={ ({ target }) => setSeller(target.value) }
          >
            { employees.map(({ name }, i) => (
              <option key={ i } value={ name }>
                { name }
              </option>
            )) }
          </select>
        </label>

        <label htmlFor="deliveryNumber">
          Endereço
          <input
            className="address_input"
            data-testid="customer_checkout__input-address"
            id="address"
            type="text"
            placeholder="Rua dos Bobos"
            value={ deliveryAddress.address }
            onChange={ ({ target }) => setDeliveryAddress(
              { ...deliveryAddress, address: target.value },
            ) }
          />
        </label>

        <label htmlFor="address">
          Número
          <input
            className="side_input"
            data-testid="customer_checkout__input-address-number"
            id="deliveryNumber"
            type="number"
            placeholder="0"
            value={ deliveryAddress.number }
            onChange={ ({ target }) => setDeliveryAddress(
              { ...deliveryAddress, number: target.value },
            ) }
          />
        </label>

        <button
          className="btn_finalize_order"
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ finalizeOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>

    </div>
  );
}
