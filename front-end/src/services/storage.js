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
      }
      return products;
    });
    console.log(shoppingCartModifided);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    return;
  }
  const newProduct = {
    id, name, price, quantity: 1,
  };
  // console.log(shoppingCart);
  // const newShoppingCart = shoppingCart.push(newProduct);
  // console.log(newShoppingCart);
  localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart, newProduct]));
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
        }
        return products;
      }).filter((products) => products.quantity > 0);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartModifided));
    return null;
  }
}
