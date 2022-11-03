// import setTotalPrice from '../context/ShoppingContext';

// function addTotalPrice() {
//   const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
//   const shoppingCartSome = shoppingCart.reduce((acc, curr) => {
//     const subTotal = parseFloat(String(curr.subTotal)
//       .replace(',', '.'));
//     return acc + subTotal;
//   }, 0.00).toFixed(2);
//   setTotalPrice.setTotalPrice(shoppingCartSome || '00,00');
// }

// export function checkExistStorage() {
//   const localStorageProducts = localStorage.getItem('shoppingCart');
//   if (!localStorageProducts) localStorage.setItem('shoppingCart', JSON.stringify([]));
// }

export function incrementProductStorage({ id, name, price }) {
  // checkExistStorage();
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const productsExists = shoppingCart.some((products) => products.id === id);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart.map((products) => {
      if (products.id === id) {
        products.quantity += 1;
        const subTotal = parseFloat(String(products.price)
          .replace(',', '.')) * products.quantity;
        products.subTotal = subTotal.toFixed(2);
      }
      return products;
    });
    console.log(shoppingCartModifided);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    // addTotalPrice();
    return;
  }
  const newProduct = {
    id, name, price, quantity: 1, subTotal: price,
  };
  // console.log(shoppingCart);
  // const newShoppingCart = shoppingCart.push(newProduct);
  // console.log(newShoppingCart);
  localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart, newProduct]));
  // addTotalPrice();
}

export function decrementProductStorage({ id }) {
  // checkExistStorage();
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const productsExists = shoppingCart.some((products) => products.id === id);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart
      .map((products) => {
        if (products.id === id) {
          products.quantity -= 1;
          const subTotal = parseFloat(String(products.price)
            .replace(',', '.')) * products.quantity;
          products.subTotal = subTotal.toFixed(2);
        }
        return products;
      }).filter((products) => products.quantity > 0);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    // addTotalPrice();
  }
}
