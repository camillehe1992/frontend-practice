import { useDispatch } from "react-redux";
import classes from "./ProductItem.module.css";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, id, description } = props;

  const addToCart = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
