import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartButton from "./CartButton";
import Cart from "./Cart";
import Products from "./Products";
import Notification from "../UI/Notification";
import { sendCartData, fetchCartData } from "../../store/cart-actions";

let isInitial = true;

const Shop = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <section>
        <CartButton />
        {showCart && <Cart />}
        <Products />
      </section>
    </>
  );
};

export default Shop;
