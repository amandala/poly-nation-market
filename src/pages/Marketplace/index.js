import React from "react";
import Products from "../../components/shopify/Products";
import { useStateValue } from "../../StateProvider";
import { H1, P } from "../../components/Typography";
import styles from "./index.module.scss";
import BeePage from "../../components/BeePage";

const Marketplace = ({ client }) => {
  const [{ shop, checkout, products }, dispatch] = useStateValue();

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

  if (!client) {
    return (
      <BeePage>
        <H1>Sorry, we're closed</H1>
      </BeePage>
    );
  }

  return (
    <div>
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
    </div>
  );
};

export default Marketplace;
