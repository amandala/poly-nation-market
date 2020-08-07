import React from "react";
import Products from "../components/shopify/Products";
import Cart from "../components/shopify/Cart";

const Marketplace = ({ client }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [checkout, setCheckout] = React.useState({ lineItems: [] });
  const [products, setProducts] = React.useState([]);
  const [shop, setShop] = React.useState({});

  React.useEffect(() => {
    if (client) {
      client.checkout.create().then((res) => {
        setCheckout(res);
      });

      client.product.fetchAll().then((res) => {
        setProducts(res);
      });

      client.shop.fetchInfo().then((res) => {
        setShop(res);
      });
    }
  }, [client]);

  const addVariantToCart = (variantId, quantity) => {
    setIsCartOpen(true);

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = checkout.id;

    return client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        setCheckout(res);
      });
  };

  const updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];

    return client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        setCheckout(res);
      });
  };

  const removeLineItemInCart = (lineItemId) => {
    const checkoutId = checkout.id;

    return client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        setCheckout(res);
      });
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  console.log(products);

  return (
    <div className="App">
      <header className="App__header">
        {!isCartOpen && (
          <div className="App__view-cart-wrapper">
            <button
              className="App__view-cart"
              onClick={() => setIsCartOpen(true)}
            >
              Cart
            </button>
          </div>
        )}
        <div className="App__title">
          <h1>{shop.name}</h1>
        </div>
      </header>
      <h2>{shop.description}</h2>
      <Products
        products={products}
        client={client}
        addVariantToCart={addVariantToCart}
      />
      <Cart
        checkout={checkout}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
      />
    </div>
  );
};

export default Marketplace;
