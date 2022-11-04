import React, { useState, useEffect } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
import { requestData } from '../../services/fetchLogin';
import SoldProductsTable from './table';
import NavBar from '../../components/NavBar';

const gambiarra = [
  { name: 'vinho', quantity: 2, price: 49.50 },
  { name: 'refri', quantity: 5, price: 10.20 },
  { name: 'carne', quantity: 1, price: 26.98 },
];

export default function CustomerCheckout() {
  const [products, setProducts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({ address: '', number: '' });
  const [seller, setSeller] = useState();

  useEffect(() => {
    const setInitialState = async () => {
      try {
        const allEmployees = await requestData('/employees');
        setEmployees(allEmployees);
        setSeller(allEmployees[0].name);
      } catch (err) {
        console.log(err);
      }
    };
    setInitialState();
  }, []);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    setProducts(cartItems || gambiarra);
  }, []);

  function finalizeOrder() {
    console.log('finalizar compra', seller, products, deliveryAddress);
  }

  return (
    <div>
      <NavBar />

      <div>
        <h1>Finalizar Pedido</h1>
        {products.length > 0
          && <SoldProductsTable productsData={ products } />}
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
            placeholder="Rua dos Bobos, Bairro dos Perdidos"
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
            placeholder="198"
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
