import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SoldProductsTable from './SoldProductsTable';
import NavBar from '../../components/NavBar';
import { ShoppingContext } from '../../context/ShoppingContext';
import { postRequest } from '../../services/request';
import emptyCart from '../../images/emptyCart.png';

export default function CustomerCheckout() {
  const [products, setProducts] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({ address: '', number: '' });
  const [seller, setSeller] = useState({ name: '', id: '' });
  const navigate = useNavigate();

  const { TotalPrice, setTotalPrice, employees, user } = useContext(ShoppingContext);

  useEffect(() => {
    if (employees) {
      const { name, id } = employees[0];
      setSeller({ name, id });
    }
  }, [employees]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    setProducts(cartItems || []);

    const totalPrice = cartItems
      .reduce((acc, cv) => acc + (cv.price * cv.quantity), 0);

    setTotalPrice(totalPrice);
  }, [setTotalPrice]);

  function checkoutValidate() {
    const minimalCharacters = 3;
    const isCorrectData = products.length > 0
      && deliveryAddress.address.length > minimalCharacters
      && deliveryAddress.number > 0;

    return !isCorrectData;
  }

  async function btnSubmitOrder() {
    const { address, number } = deliveryAddress;
    const sales = products.map(({ id, quantity }) => (
      { productId: id, quantity }
    ));
    const newOrder = {
      userId: user.id,
      sellerId: seller.id,
      totalPrice: TotalPrice.toFixed(2),
      deliveryAddress: address,
      deliveryNumber: number,
      sales,
    };

    const orderData = await postRequest('/sales/orders', newOrder);
    localStorage.setItem('shoppingCart', JSON.stringify([]));
    navigate(`/customer/orders/${orderData.id}`);
  }

  function handleSeller({ value: empId }) {
    const employeeData = employees.filter((e) => e.id === Number(empId));
    setSeller({
      name: employeeData.name,
      id: employeeData.id,
    });
  }

  return (
    <div>
      <NavBar />

      <div>
        {
          products.length <= 0
            ? (
              <div id="empt-cart">
                <h3>O carrinho está vazio</h3>
                <img src={ emptyCart } alt="Empty Cart" />
              </div>
            ) : (
              <SoldProductsTable
                productsData={ products }
                setProductsData={ setProducts }
              />)
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
            onClick={ (event) => {
              handleSeller(event.target);
            } }
          >
            { employees.map(({ name, id }, i) => (
              <option
                key={ i }
                value={ id }
                id={ name }
              >
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
          onClick={ () => btnSubmitOrder() }
          disabled={ checkoutValidate() }
        >
          FINALIZAR PEDIDO
        </button>
      </div>

    </div>
  );
}
