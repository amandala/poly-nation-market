import React from "react";
import Products from "../../components/shopify/Products";
import Cart from "../../components/shopify/Cart";
import { useStateValue } from "../../StateProvider";
import { H1, P } from "../../components/Typography";
import styles from "./index.module.scss";

const Marketplace = ({ client }) => {
  const [{ isCartOpen, shop, checkout, products }, dispatch] = useStateValue();

  React.useEffect(() => {
    if (client) {
      client.checkout.create().then((res) => {
        dispatch({
          type: "SET_CHECKOUT",
          data: res,
        });
      });

      client.product.fetchAll().then((res) => {
        dispatch({
          type: "SET_PRODUCTS",
          data: res,
        });
      });

      client.shop.fetchInfo().then((res) => {
        dispatch({
          type: "SET_SHOP",
          data: res,
        });
      });
    }
  }, [client, dispatch]);

  const addVariantToCart = (variantId, quantity) => {
    dispatch({
      type: "SET_IS_CART_OPEN",
      data: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = checkout.id;

    return client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        dispatch({
          type: "SET_CHECKOUT",
          data: res,
        });
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
        dispatch({
          type: "SET_CHECKOUT",
          data: res,
        });
      });
  };

  const removeLineItemInCart = (lineItemId) => {
    const checkoutId = checkout.id;

    return client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        dispatch({
          type: "SET_CHECKOUT",
          data: res,
        });
      });
  };

  const handleCartClose = () => {
    dispatch({
      type: "SET_IS_CART_OPEN",
      data: false,
    });
  };

  return (
    <div className={styles.Marketplace}>
      <header className={styles.Header}>
        <div className={styles.Title}>
          <H1>{shop.name}</H1>
        </div>
      </header>
      <div className={styles.Content}>
        <P className={styles.ShopDescription}>{shop.description}</P>
        <Products
          products={products}
          client={client}
          addVariantToCart={addVariantToCart}
        />
      </div>
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
