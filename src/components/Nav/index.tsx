import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Cart from "../shopify/Cart";

import styles from "./index.module.scss";
//@ts-ignore
const Nav = ({ client }) => {
  const [{ isCartOpen, shop, checkout }, dispatch] = useStateValue();

  const updateQuantityInCart = (lineItemId: string, quantity: string) => {
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];

    return (
      client.checkout
        .updateLineItems(checkoutId, lineItemsToUpdate)
        //@ts-ignore
        .then((res) => {
          dispatch({
            type: "SET_CHECKOUT",
            data: res,
          });
        })
    );
  };

  const removeLineItemInCart = (lineItemId: string) => {
    const checkoutId = checkout.id;

    return (
      client.checkout
        .removeLineItems(checkoutId, [lineItemId])
        //@ts-ignore
        .then((res) => {
          dispatch({
            type: "SET_CHECKOUT",
            data: res,
          });
        })
    );
  };

  const handleCartClose = () => {
    dispatch({
      type: "SET_IS_CART_OPEN",
      data: false,
    });
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles.NavLinks}>
        <ul className={styles.Links}>
          <li className={styles.LinkWrapper}>
            <Link className={styles.Link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.LinkWrapper}>
            <Link className={styles.Link} to="/market">
              Marketplace
            </Link>
          </li>
        </ul>
        {!isCartOpen && shop && (
          <span className={styles.LinkWrapper}>
            <button
              className={styles.Link}
              onClick={() =>
                dispatch({
                  type: "SET_IS_CART_OPEN",
                  data: true,
                })
              }
            >
              Cart
            </button>
          </span>
        )}
      </div>
      <Cart
        checkout={checkout}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
      />
    </nav>
  );
};

export default Nav;
