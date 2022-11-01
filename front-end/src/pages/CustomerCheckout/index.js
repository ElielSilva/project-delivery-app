import React, { useState, useEffect } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
import { requestData } from '../../services/fetchLogin';
import SoldProductsTable from '../../components/tables/SoldProducts ';

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
      <div>
        <h1>Finalizar Pedido</h1>
        {products.length > 0
          && <SoldProductsTable tableData={ products } />}
      </div>

      <h3>Detalhes e Endereço para Entrega</h3>

      <div>
        <label htmlFor="employee">
          P. Vendedor(a) Responsável:
          <select
            data-testid=""
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
            data-testid=""
            className="input"
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
            data-testid=""
            className="input"
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
          data-testid=""
          type="button"
          onClick={ finalizeOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>

    </div>
  );
}
