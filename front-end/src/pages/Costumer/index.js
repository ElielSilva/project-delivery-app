import React, { useState, useEffect } from 'react';

import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import { requestData } from '../../services/fetchLogin';
import Button from '../../components/Button';

export default function Costumer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestProduct() {
      const allProducts = await requestData('/customer/products');
      const newProduct = allProducts.map((product) => {
        product.price = parseFloat(product.price);
        return product;
      });
      setProducts(newProduct);
    }
    requestProduct();
  }, []);

  // function btnCarShop() {
  //   navigate('/customer/checkout');
  // }

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
      <Button />
    </>
  );
}
