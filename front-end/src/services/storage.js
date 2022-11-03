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
const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

export function incrementProductStorage({ productId, name, price }) {
  const productsExists = shoppingCart.some((products) => products.id === productId);
  console.log(price);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart.map((products) => {
      if (products.id === productId) {
        products.quantity += 1;
        // const subTotal = parseFloat((products.price)
        //   .replace(',', '.')) * products.quantity;
        // products.subTotal = subTotal.toFixed(2);
        products.subTotal = price * products.quantity;
      }
      return products;
    });
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    return;
  }
  const newProduct = {
    productId, name, price, quantity: 1, subTotal: price,
  };
  localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart, newProduct]));
}

export function decrementProductStorage({ id }) {
  // checkExistStorage();
  const productsExists = shoppingCart.some((products) => products.id === id);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart
      .map((products) => {
        if (products.id === id) {
          products.quantity -= 1;
          // const subTotal = parseFloat((products.price)
          //   .replace(',', '.')) * products.quantity;
          // products.subTotal = subTotal.toFixed(2);
          products.subTotal = products.price * products.quantity;
        }
        return products;
      }).filter((products) => products.quantity > 0);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    // addTotalPrice();
  }
}

export function incrementInputStorage({ id, name, price, quantity }) {
  // checkExistStorage();
  const productsExists = shoppingCart.some((products) => products.id === id);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart.map((products) => {
      if (products.id === id) {
        products.quantity = quantity;
        // const subTotal = parseFloat((products.price)
        //   .replace(',', '.')) * products.quantity;
        // products.subTotal = subTotal.toFixed(2);
        products.subTotal = products.price * products.quantity;
      }
      return products;
    });
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    // addTotalPrice();
    return;
  }
  // const subTotal = (parseFloat((price).replace(',', '.')) * quantity).toFixed(2);
  const newProduct = {
    id, name, price, quantity, subTotal: price * quantity,
  };
  localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart, newProduct]));
  // addTotalPrice();
}
