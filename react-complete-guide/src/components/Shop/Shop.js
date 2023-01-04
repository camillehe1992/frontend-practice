import { useSelector } from "react-redux";
import CartButton from "./CartButton";
import Cart from "./Cart";
import Products from "./Products";

const Shop = () => {
  const isVisible = useSelector((state) => state.ui.cartIsVisible);
  return (
    <section>
      <CartButton />
      {isVisible && <Cart />}
      <Products />
    </section>
  );
};

export default Shop;
