import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const API_URL = " http://localhost:1337/parse";
const HEADERS = {
  headers: {
    "X-Parse-Application-Id": "APPLICATION_ID",
    "Content-Type": "application/json",
  },
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/classes/cart`, HEADERS);

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data.results;
    };

    try {
      const cartItems = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartItems || [],
          totalQuantity: cartItems.length || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    console.log(cart);

    const sendRequest = async () => {
      const response = await fetch(`${API_URL}/classes/cart`, {
        ...HEADERS,
        method: "POST",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      const data = await response.json();

      if (data.objectId) {
        dispatch(
          cartActions.replaceCart({
            cartId: response.objectId,
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          })
        );
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
