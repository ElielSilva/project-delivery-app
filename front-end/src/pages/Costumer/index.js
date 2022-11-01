import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import { requestData } from '../../services/fatchLogin';

export default function Costumer() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function requestProduct() {
      const allProducts = await requestData('/customer/products');
      const newProduct = allProducts.map((product) => {
        product.price = String(product.price).replace('.', ',');
        return product;
      });
      console.log('newProduct', newProduct);
      setProducts(newProduct);
    }
    requestProduct();
  }, []);

  function btnCarShop() {
    navigate('/customer/checkout');
  }

  return (
    <>
      <NavBar />
      {
        products.map(({ id, price, url_image: image, name }, index) => (
          <ProductCard
            key={ index }
            price={ price }
            image={ image }
            name={ name }
            id={ id }
          />
        ))
      }
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => { btnCarShop(); } }
      >
        Teste
      </button>
    </>
  );
}
