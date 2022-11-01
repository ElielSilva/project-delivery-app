import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import { requestData } from '../../services/fetchLogin';

export default function Costumer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestProduct() {
      const allProducts = await requestData('/customer/products');
      setProducts(allProducts);
    }
    requestProduct();
  }, []);

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
    </>
  );
}
