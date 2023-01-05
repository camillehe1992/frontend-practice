import { configureStore } from "@reduxjs/toolkit";

import counter from "./counter";
import auth from "./auth";
import ui from "./ui-slice";
import cart from "./cart-slice";

const store = configureStore({
  reducer: { counter, auth, ui, cart },
});

export default store;
