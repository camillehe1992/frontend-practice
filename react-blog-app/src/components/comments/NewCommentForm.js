import { useRef } from "react";
import { useFetcher } from "react-router-dom";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentRef = useRef();
  const fetcher = useFetcher();

  if (fetcher.state !== "idle") {
    commentRef.current.value = "";
  }

  return (
    <fetcher.Form
      className={classes.form}
      method="post"
      action={`/quotes/${props.quoteId}`}
      disabled={props.submitting}
    >
      {fetcher.state === "submitting" && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}

      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="3"
          name="comment-text"
          required
          ref={commentRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </fetcher.Form>
  );
};

export default NewCommentForm;
