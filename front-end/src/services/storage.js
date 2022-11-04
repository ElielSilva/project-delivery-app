// const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

export function incrementProductStorage({ id, name, price }) {
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const productsExists = shoppingCart.some((products) => products.id === id);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart.map((products) => {
      if (products.id === id) {
        products.quantity += 1;
        products.subTotal = price * products.quantity;
      }
      return products;
    });
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    return;
  }
  const newProduct = {
    id, name, price, quantity: 1, subTotal: price,
  };
  localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart, newProduct]));
}

export function decrementProductStorage({ id }) {
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
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
  }
}

export function incrementInputStorage({ id, name, price, quantity }) {
  // checkExistStorage();
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const productsExists = shoppingCart.some((products) => products.id === id);
  if (productsExists) {
    const shoppingCartModifided = shoppingCart.map((products) => {
      if (products.id === id) {
        products.quantity = quantity;
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
