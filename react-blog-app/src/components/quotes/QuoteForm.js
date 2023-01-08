import { Form } from "react-router-dom";
import classes from "./QuoteForm.module.css";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
  return (
    <Card>
      <Form
        className={classes.form}
        method="post"
        action="/new-quote"
        disabled={props.submitting}
      >
        {props.submitting && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" name="quote-text" required></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </Form>
    </Card>
  );
};

export default QuoteForm;
